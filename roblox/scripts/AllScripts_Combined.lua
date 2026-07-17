-- ================================================================
--  AllScripts_Combined.lua
--  Allinma World — هاكاثون أمد 26
--  جميع أكواد اللعبة مجمّعة في ملف واحد للمراجعة
--
--  الفهرس:
--  [1] BankShiftScript.lua          — فتح وإغلاق دوام موظف البنك
--  [2] BuildManager.lua             — نظام بناء البنك خطوة بخطوة
--  [3] InteractiveBankCustomerScript.lua — التفاعل مع عملاء البنك التفاعلي
--  [4] PlayerDataScript.lua         — بيانات اللاعب عند الدخول
--  [5] QuickWorkerAndVIP.lua        — شراء العامل والترقية وعميل VIP
--  [6] LocalScript1.lua             — إغلاق GUI عند الضغط (Client)
--  [7] LocalScript2.lua             — عرض الرصيد وتحديثه (Client)
-- ================================================================


-- ================================================================
--  [1] BankShiftScript.lua
--  فتح وإغلاق دوام موظف البنك عبر Proximity Prompts
-- ================================================================

local bankSystem = workspace:WaitForChild("BankSystem")

local openPrompt = bankSystem
  :WaitForChild("ShiftButtonPart")
  :WaitForChild("ProximityPrompt")

local closePrompt = bankSystem
  :WaitForChild("CloseBankPart")
  :WaitForChild("ProximityPrompt")

openPrompt.Triggered:Connect(function(player)
  local leaderstats = player:FindFirstChild("leaderstats")
  local isOpen = player:FindFirstChild("IsBankOpen")
  local currentTask = player:FindFirstChild("CurrentBankTask")
  local job = leaderstats and leaderstats:FindFirstChild("Job")

  if not isOpen or not currentTask or not job then
    warn("بيانات اللاعب غير مكتملة عند فتح البنك")
    return
  end

  if isOpen.Value == true then
    return
  end

  local workerBought = player:FindFirstChild("WorkerBought")

  if workerBought and workerBought.Value == true then
    warn("العامل مسؤول عن البنك الآن")
    return
  end

  isOpen.Value = true
  currentTask.Value = "WaitingForCustomer"
  job.Value = "موظف بنك"

  print("بدأ الدوام")
end)

closePrompt.Triggered:Connect(function(player)
  local leaderstats = player:FindFirstChild("leaderstats")
  local isOpen = player:FindFirstChild("IsBankOpen")
  local currentTask = player:FindFirstChild("CurrentBankTask")
  local hasCash = player:FindFirstChild("HasCashInHand")
  local job = leaderstats and leaderstats:FindFirstChild("Job")

  if not isOpen or not currentTask or not job then
    warn("بيانات اللاعب غير مكتملة عند إغلاق البنك")
    return
  end

  if isOpen.Value == false then
    return
  end

  if currentTask.Value ~= "WaitingForCustomer" then
    warn("لا يمكنك إغلاق البنك الآن، أنهي خدمة العميل أولًا")
    return
  end

  if hasCash and hasCash.Value == true then
    warn("لا يمكنك إغلاق البنك وأنت تحمل أموال")
    return
  end

  isOpen.Value = false
  currentTask.Value = "None"
  job.Value = "بدون وظيفة"

  print("تم إغلاق البنك")
end)


-- ================================================================
--  [2] BuildManager.lua
--  نظام بناء البنك خطوة بخطوة (أرضية → مبنى → أثاث → مكتب)
-- ================================================================

do
  local Players = game:GetService("Players")

  local steps = {
    { Button = "BuildButton1", Target = "BankFloor",    Cost = 1000, Title = "بناء الأرضية",     NextButton = "BuildButton2" },
    { Button = "BuildButton2", Target = "BankBuilding", Cost = 5000, Title = "بناء البنك",        NextButton = "BuildButton3" },
    { Button = "BuildButton3", Target = "Interior1",    Cost = 500,  Title = "أثاث داخلي 1",     NextButton = "BuildButton4" },
    { Button = "BuildButton4", Target = "Interior2",    Cost = 400,  Title = "أثاث داخلي 2",     NextButton = "BuildButton5" },
    { Button = "BuildButton5", Target = "Interior3",    Cost = 600,  Title = "أثاث داخلي 3",     NextButton = "BuildButton6" },
    { Button = "BuildButton6", Target = "Interior4",    Cost = 400,  Title = "أثاث داخلي 4",     NextButton = "BuildButton8" },
    { Button = "BuildButton8", Target = "mydesk",       Cost = 900,  Title = "بناء مكتب المدير", NextButton = nil, IsFinalStep = true }
  }

  local targetSaved, buttonSaved, labels, defaultMessages = {}, {}, {}, {}
  local bought, cooldown = {}, {}

  local function findObject(name) return workspace:FindFirstChild(name, true) end

  local function getParts(object)
    local parts = {}
    if not object then return parts end
    if object:IsA("BasePart") then table.insert(parts, object) end
    for _, item in ipairs(object:GetDescendants()) do
      if item:IsA("BasePart") then table.insert(parts, item) end
    end
    return parts
  end

  local function createMessageGui(button, message)
    local parts = getParts(button)
    local mainPart = parts[1]
    if not mainPart then return end
    local oldGui = mainPart:FindFirstChild("PriceGui")
    if oldGui then oldGui:Destroy() end
    local gui = Instance.new("BillboardGui")
    gui.Name = "PriceGui"
    gui.Size = UDim2.new(0, 250, 0, 80)
    gui.StudsOffset = Vector3.new(0, 3, 0)
    gui.AlwaysOnTop = true
    gui.Parent = mainPart
    local label = Instance.new("TextLabel")
    label.Name = "PriceLabel"
    label.Size = UDim2.new(1, 0, 1, 0)
    label.BackgroundTransparency = 0.15
    label.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
    label.TextColor3 = Color3.fromRGB(0, 0, 0)
    label.TextScaled = true
    label.TextWrapped = true
    label.Font = Enum.Font.GothamBold
    label.Text = message
    label.Parent = gui
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 10)
    corner.Parent = label
    return label
  end

  local function saveAndHideTarget(index, target)
    targetSaved[index] = {}
    local function saveItem(item)
      if item:IsA("BasePart") then
        targetSaved[index][item] = { Class="BasePart", Transparency=item.Transparency, CanCollide=item.CanCollide, CanTouch=item.CanTouch }
        item.Transparency = 1; item.CanCollide = false; item.CanTouch = false; item.Anchored = true
      elseif item:IsA("Decal") or item:IsA("Texture") then
        targetSaved[index][item] = { Class="Texture", Transparency=item.Transparency }
        item.Transparency = 1
      elseif item:IsA("SurfaceGui") or item:IsA("BillboardGui") then
        targetSaved[index][item] = { Class="Gui", Enabled=item.Enabled }
        item.Enabled = false
      end
    end
    saveItem(target)
    for _, item in ipairs(target:GetDescendants()) do saveItem(item) end
  end

  local function showTarget(index)
    local saved = targetSaved[index]
    if not saved then return end
    for item, data in pairs(saved) do
      if item and item.Parent then
        if data.Class == "BasePart" then
          item.Transparency = data.Transparency; item.CanCollide = data.CanCollide; item.CanTouch = data.CanTouch; item.Anchored = true
        elseif data.Class == "Texture" then item.Transparency = data.Transparency
        elseif data.Class == "Gui" then item.Enabled = data.Enabled
        end
      end
    end
  end

  local function saveButton(index, button)
    buttonSaved[index] = {}
    for _, part in ipairs(getParts(button)) do
      buttonSaved[index][part] = { Transparency=part.Transparency, CanCollide=part.CanCollide, CanTouch=part.CanTouch }
    end
  end

  local function hideButton(index)
    local button = findObject(steps[index].Button)
    if not button then return end
    for _, part in ipairs(getParts(button)) do
      part.Transparency = 1; part.CanCollide = false; part.CanTouch = false; part.Anchored = true
    end
    for _, item in ipairs(button:GetDescendants()) do
      if item:IsA("BillboardGui") or item:IsA("SurfaceGui") then item.Enabled = false end
    end
  end

  local function showButton(index)
    local button = findObject(steps[index].Button)
    if not button then warn("لم يتم العثور على الزر: " .. steps[index].Button); return end
    for _, part in ipairs(getParts(button)) do
      local saved = buttonSaved[index] and buttonSaved[index][part]
      if saved then part.Transparency = saved.Transparency; part.CanCollide = saved.CanCollide
      else part.Transparency = 0; part.CanCollide = true end
      part.CanTouch = true; part.Anchored = true
    end
    for _, item in ipairs(button:GetDescendants()) do
      if item:IsA("BillboardGui") or item:IsA("SurfaceGui") then item.Enabled = true end
    end
  end

  local function setLabelMessage(index, text, seconds)
    local label = labels[index]
    if not label then return end
    label.Text = text
    task.delay(seconds or 1.5, function()
      if label and label.Parent then label.Text = defaultMessages[index] or "أكمل المهمة السابقة" end
    end)
  end

  local function promoteToManager(player)
    if player:GetAttribute("IsManager") == true then return end
    player:SetAttribute("IsManager", true)
    local leaderstats = player:FindFirstChild("leaderstats")
    local job = leaderstats and leaderstats:FindFirstChild("Job")
    if job then job.Value = "مدير بنك" end
    local currentTask = player:FindFirstChild("CurrentBankTask")
    if currentTask then currentTask.Value = "VIPDeposit" end
    print(player.Name .. " تمت ترقيته إلى مدير بنك")
  end

  local function buyStep(index, player)
    local playerId = player.UserId
    bought[playerId] = bought[playerId] or {}
    if bought[playerId][index] then return end
    local step = steps[index]
    if player:GetAttribute("OwnsWorker") ~= true then
      setLabelMessage(index, "يجب توظيف العامل أولًا!", 2); return
    end
    local stats = player:FindFirstChild("leaderstats")
    if not stats then return end
    local cash = stats:FindFirstChild("Cash")
    if not cash then return end
    if cash.Value < step.Cost then
      setLabelMessage(index, "رصيدك غير كافٍ! تحتاج " .. step.Cost .. "$", 2); return
    end
    cash.Value -= step.Cost
    bought[playerId][index] = true
    showTarget(index); hideButton(index)
    if step.IsFinalStep then promoteToManager(player); return end
    if step.NextButton then
      for nextIndex, nextStep in ipairs(steps) do
        if nextStep.Button == step.NextButton then showButton(nextIndex); break end
      end
    end
  end

  local function connectButton(index, button)
    for _, part in ipairs(getParts(button)) do
      part.Touched:Connect(function(hit)
        local character = hit:FindFirstAncestorOfClass("Model")
        if not character then return end
        local humanoid = character:FindFirstChildOfClass("Humanoid")
        if not humanoid then return end
        local player = Players:GetPlayerFromCharacter(character)
        if not player then return end
        local key = tostring(player.UserId) .. "_" .. tostring(index)
        if cooldown[key] then return end
        cooldown[key] = true
        buyStep(index, player)
        task.delay(1, function() cooldown[key] = nil end)
      end)
    end
  end

  for index, step in ipairs(steps) do
    local button = findObject(step.Button)
    local target = findObject(step.Target)
    if not button then warn("Button not found: " .. step.Button)
    else
      saveButton(index, button)
      local priceText = step.Title .. "\n$" .. step.Cost
      defaultMessages[index] = priceText
      labels[index] = createMessageGui(button, priceText)
    end
    if not target then warn("Target not found: " .. step.Target)
    else saveAndHideTarget(index, target) end
  end

  for index in ipairs(steps) do hideButton(index) end

  for index, step in ipairs(steps) do
    local button = findObject(step.Button)
    if button then connectButton(index, button) end
  end

  Players.PlayerRemoving:Connect(function(player)
    bought[player.UserId] = nil
    for key in pairs(cooldown) do
      if string.find(key, tostring(player.UserId), 1, true) == 1 then cooldown[key] = nil end
    end
  end)
end


-- ================================================================
--  [3] InteractiveBankCustomerScript.lua
--  التفاعل مع عملاء البنك التفاعلي (نسخة موازية من BuildManager)
-- ================================================================
-- (نفس كود BuildManager — مُحدَّد كـ ServerScript منفصل في Roblox Studio)
-- راجع roblox/scripts/InteractiveBankCustomerScript.lua للكود الكامل


-- ================================================================
--  [4] PlayerDataScript.lua
--  إنشاء بيانات كل لاعب عند دخوله (رصيد، وظيفة، حالة)
-- ================================================================

game.Players.PlayerAdded:Connect(function(player)

  local leaderstats = Instance.new("Folder")
  leaderstats.Name = "leaderstats"
  leaderstats.Parent = player

  local coins = Instance.new("IntValue")
  coins.Name = "Cash"
  coins.Value = 5000
  coins.Parent = leaderstats

  local job = Instance.new("StringValue")
  job.Name = "Job"
  job.Value = "بدون وظيفة"
  job.Parent = leaderstats

  local completedCustomers = Instance.new("IntValue")
  completedCustomers.Name = "CompletedCustomers"
  completedCustomers.Value = 0
  completedCustomers.Parent = player

  local isBankEmployee = Instance.new("BoolValue")
  isBankEmployee.Name = "IsBankEmployee"
  isBankEmployee.Value = false
  isBankEmployee.Parent = player

  local isBankOpen = Instance.new("BoolValue")
  isBankOpen.Name = "IsBankOpen"
  isBankOpen.Value = false
  isBankOpen.Parent = player

  local isWorking = Instance.new("BoolValue")
  isWorking.Name = "IsWorking"
  isWorking.Value = false
  isWorking.Parent = player

  local currentBankTask = Instance.new("StringValue")
  currentBankTask.Name = "CurrentBankTask"
  currentBankTask.Value = "None"
  currentBankTask.Parent = player

  local isManager = Instance.new("BoolValue")
  isManager.Name = "IsManager"
  isManager.Value = false
  isManager.Parent = player

  local workerBought = Instance.new("BoolValue")
  workerBought.Name = "WorkerBought"
  workerBought.Value = false
  workerBought.Parent = player

  local hasCashInHand = Instance.new("BoolValue")
  hasCashInHand.Name = "HasCashInHand"
  hasCashInHand.Value = false
  hasCashInHand.Parent = player

  local cashInHandAmount = Instance.new("IntValue")
  cashInHandAmount.Name = "CashInHandAmount"
  cashInHandAmount.Value = 0
  cashInHandAmount.Parent = player

end)


-- ================================================================
--  [5] QuickWorkerAndVIP.lua
--  شراء العامل، ترقية اللاعب لمدير، وإنشاء عميل VIP بمليون دولار
-- ================================================================

do
  local Players = game:GetService("Players")
  local ServerStorage = game:GetService("ServerStorage")

  local REQUIRED_CASH = 5000
  local WORKER_COST   = 5000
  local VIP_AMOUNT    = 1000000

  local bankSystem         = workspace:WaitForChild("BankSystem")
  local workerButton       = bankSystem:WaitForChild("WorkerBuyButton")
  local workerPrompt       = workerButton:WaitForChild("ProximityPrompt")
  workerButton.Transparency = 1
  workerButton.CanCollide  = false
  workerPrompt.Enabled     = false

  local workerSpawnPoint   = workspace.BankSystem.WorkerSpawnPoint
  local vipPoint           = bankSystem:WaitForChild("VIPPoint")
  local customerSpawnPoint = bankSystem:WaitForChild("CustomerSpawnPoint")
  local customerExitPoint  = bankSystem:WaitForChild("CustomerExitPoint")
  local customerTemplate   = ServerStorage:WaitForChild("BankCustomer")

  local vipCreated, buying = {}, {}

  local function showMessage(player, titleText, messageText)
    local playerGui = player:FindFirstChild("PlayerGui")
    if not playerGui then return end
    local oldGui = playerGui:FindFirstChild("QuickNotificationGui")
    if oldGui then oldGui:Destroy() end
    local gui = Instance.new("ScreenGui")
    gui.Name = "QuickNotificationGui"
    gui.ResetOnSpawn = false
    gui.IgnoreGuiInset = true
    gui.Parent = playerGui
    local frame = Instance.new("Frame")
    frame.Size = UDim2.new(0, 600, 0, 170)
    frame.Position = UDim2.new(0.5, -300, 0.08, 0)
    frame.BackgroundColor3 = Color3.fromRGB(30, 130, 70)
    frame.BackgroundTransparency = 0.05
    frame.Parent = gui
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 25)
    corner.Parent = frame
    local stroke = Instance.new("UIStroke")
    stroke.Thickness = 4
    stroke.Color = Color3.fromRGB(255, 255, 255)
    stroke.Parent = frame
    local title = Instance.new("TextLabel")
    title.Size = UDim2.new(1, -20, 0.45, 0)
    title.Position = UDim2.new(0, 10, 0, 5)
    title.BackgroundTransparency = 1
    title.TextColor3 = Color3.fromRGB(255, 255, 255)
    title.TextScaled = true
    title.Font = Enum.Font.GothamBold
    title.Text = titleText
    title.Parent = frame
    local message = Instance.new("TextLabel")
    message.Size = UDim2.new(1, -30, 0.45, 0)
    message.Position = UDim2.new(0, 15, 0.5, 0)
    message.BackgroundTransparency = 1
    message.TextColor3 = Color3.fromRGB(255, 255, 255)
    message.TextScaled = true
    message.TextWrapped = true
    message.Font = Enum.Font.Gotham
    message.Text = messageText
    message.Parent = frame
    task.delay(5, function() if gui.Parent then gui:Destroy() end end)
  end

  local function setVisible(object, visible)
    local function update(item)
      if item:IsA("BasePart") then
        item.Transparency = visible and 0 or 1; item.CanCollide = visible; item.CanTouch = visible
      elseif item:IsA("ProximityPrompt") then item.Enabled = visible
      elseif item:IsA("BillboardGui") or item:IsA("SurfaceGui") then item.Enabled = visible
      end
    end
    update(object)
    for _, item in ipairs(object:GetDescendants()) do update(item) end
  end

  setVisible(workerButton, false)

  local function setNpcText(npc, text)
    local head = npc:FindFirstChild("Head")
    if not head then return end
    local oldGui = head:FindFirstChild("QuickNpcGui")
    if oldGui then oldGui:Destroy() end
    local gui = Instance.new("BillboardGui")
    gui.Name = "QuickNpcGui"
    gui.Size = UDim2.new(0, 330, 0, 90)
    gui.StudsOffset = Vector3.new(0, 3.5, 0)
    gui.AlwaysOnTop = true
    gui.Parent = head
    local label = Instance.new("TextLabel")
    label.Size = UDim2.new(1, 0, 1, 0)
    label.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
    label.BackgroundTransparency = 0.15
    label.TextColor3 = Color3.fromRGB(255, 255, 255)
    label.TextScaled = true
    label.TextWrapped = true
    label.Font = Enum.Font.GothamBold
    label.Text = text
    label.Parent = gui
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 12)
    corner.Parent = label
  end

  local function createWorker(player)
    local oldWorker = workspace:FindFirstChild("BankWorker_" .. player.UserId)
    if oldWorker then oldWorker:Destroy() end
    local worker = customerTemplate:Clone()
    worker.Name = "BankWorker_" .. player.UserId
    worker.Parent = workspace
    worker:PivotTo(workerSpawnPoint.CFrame)
    setNpcText(worker, "موظف البنك")
    local root = worker:FindFirstChild("HumanoidRootPart")
    if root then root.Anchored = true end
  end

  local function addVipStar(customer)
    local head = customer:FindFirstChild("Head")
    if not head then return end
    local gui = Instance.new("BillboardGui")
    gui.Name = "VIPStarGui"
    gui.Size = UDim2.new(0, 160, 0, 80)
    gui.StudsOffset = Vector3.new(0, 5, 0)
    gui.AlwaysOnTop = true
    gui.Parent = head
    local label = Instance.new("TextLabel")
    label.Size = UDim2.new(1, 0, 1, 0)
    label.BackgroundTransparency = 1
    label.Text = "⭐️ VIP"
    label.TextColor3 = Color3.fromRGB(255, 220, 0)
    label.TextScaled = true
    label.Font = Enum.Font.GothamBold
    label.Parent = gui
  end

  local function getDeskPart()
    local desk = workspace:FindFirstChild("mydesk", true)
    if not desk then return nil end
    if desk:IsA("BasePart") then return desk end
    return desk:FindFirstChildWhichIsA("BasePart", true)
  end

  local function createVipCustomer(player)
    if vipCreated[player] then return end
    vipCreated[player] = true
    local deskPart = getDeskPart()
    if not deskPart then warn("لم يتم العثور على mydesk"); return end
    local customer = customerTemplate:Clone()
    customer.Name = "VIPCustomer_" .. player.UserId
    customer.Parent = workspace
    customer:PivotTo(customerSpawnPoint.CFrame)
    customer:SetAttribute("TransactionType", "Deposit")
    customer:SetAttribute("Amount", VIP_AMOUNT)
    addVipStar(customer)
    setNpcText(customer, "أريد إيداع 1,000,000$")
    local humanoid = customer:FindFirstChildOfClass("Humanoid")
    if humanoid then humanoid:MoveTo(vipPoint.Position) end
    local oldPrompt = deskPart:FindFirstChild("VIPDepositPrompt")
    if oldPrompt then oldPrompt:Destroy() end
    local prompt = Instance.new("ProximityPrompt")
    prompt.Name = "VIPDepositPrompt"
    prompt.ActionText = "استلام الإيداع"
    prompt.ObjectText = "عميل VIP - 1,000,000$"
    prompt.HoldDuration = 1
    prompt.MaxActivationDistance = 10
    prompt.Parent = deskPart
    prompt.Triggered:Connect(function(triggerPlayer)
      if triggerPlayer ~= player then return end
      if not player:GetAttribute("IsManager") then return end
      if not customer.Parent then return end
      prompt.Enabled = false
      setNpcText(customer, "شكرًا لك أيها المدير!")
      showMessage(player, "تمت العملية بنجاح", "تم استلام إيداع عميل VIP بقيمة 1,000,000$.")
      local completed = player:FindFirstChild("CompletedCustomers")
      if completed then completed.Value += 1 end
      if humanoid then humanoid:MoveTo(customerExitPoint.Position) end
      task.wait(3)
      if customer.Parent then customer:Destroy() end
      prompt:Destroy()
    end)
  end

  local function setupManagerMonitor(player)
    player:GetAttributeChangedSignal("IsManager"):Connect(function()
      if player:GetAttribute("IsManager") == true then
        showMessage(player, "🎉 تمت ترقيتك إلى مدير!", "اذهب إلى مكتبك. سيصل الآن عميل VIP لإيداع مليون.")
        task.wait(3)
        createVipCustomer(player)
      end
    end)
  end

  local function setupCashMonitor(player)
    local leaderstats = player:WaitForChild("leaderstats")
    local cash = leaderstats:WaitForChild("Cash")
    player:SetAttribute("WorkerUnlocked", false)
    player:SetAttribute("OwnsWorker", false)
    player:SetAttribute("IsManager", false)
    setVisible(workerButton, false)
    local function checkCash()
      if cash.Value >= REQUIRED_CASH
        and not player:GetAttribute("WorkerUnlocked")
        and not player:GetAttribute("OwnsWorker") then
        player:SetAttribute("WorkerUnlocked", true)
        workerButton.Transparency = 0
        workerButton.CanCollide = true
        workerPrompt.Enabled = true
        showMessage(player, "يمكنك الآن توظيف عامل!", "اذهب إلى زر العامل داخل البنك الأول.")
      end
    end
    cash:GetPropertyChangedSignal("Value"):Connect(checkCash)
    checkCash()
  end

  workerPrompt.Triggered:Connect(function(player)
    if buying[player] then return end
    buying[player] = true
    local leaderstats = player:FindFirstChild("leaderstats")
    local cash = leaderstats and leaderstats:FindFirstChild("Cash")
    local job  = leaderstats and leaderstats:FindFirstChild("Job")
    if not cash then buying[player] = nil; return end
    if not player:GetAttribute("WorkerUnlocked") then
      showMessage(player, "العامل غير متاح", "يجب أن يصل رصيدك إلى 15,000$.")
      buying[player] = nil; return
    end
    if player:GetAttribute("OwnsWorker") then buying[player] = nil; return end
    if cash.Value < WORKER_COST then
      showMessage(player, "رصيدك غير كافٍ", "تحتاج إلى 10,000$ لشراء العامل.")
      buying[player] = nil; return
    end
    cash.Value -= WORKER_COST
    player:SetAttribute("OwnsWorker", true)
    player:SetAttribute("IsManager", true)
    if job then job.Value = "مدير بنك" end
    createWorker(player)
    local isOpen       = player:FindFirstChild("IsBankOpen")
    local currentTask  = player:FindFirstChild("CurrentBankTask")
    local workerBought = player:FindFirstChild("WorkerBought")
    local isManagerVal = player:FindFirstChild("IsManager")
    if isOpen       then isOpen.Value       = false end
    if currentTask  then currentTask.Value  = "WorkerHandlingBank" end
    if workerBought then workerBought.Value = true end
    if isManagerVal then isManagerVal.Value = true end
    workerButton.Transparency = 1
    workerButton.CanCollide   = false
    workerPrompt.Enabled      = false
    showMessage(player, "🎉 تمت ترقيتك!", "أصبحت الآن مدير بنك.\n\nالمهمة الجديدة:\nاستقبل أول عميل VIP.")
    task.wait(1)
    buying[player] = nil
  end)

  setVisible(workerButton, false)

  local buildButton1 = workspace:FindFirstChild("BuildButton1", true)
  if buildButton1 then setVisible(buildButton1, false) end

  Players.PlayerAdded:Connect(function(player)
    task.spawn(function()
      setupManagerMonitor(player)
      setupCashMonitor(player)
    end)
  end)

  for _, player in ipairs(Players:GetPlayers()) do
    task.spawn(function()
      setupManagerMonitor(player)
      setupCashMonitor(player)
    end)
  end

  Players.PlayerRemoving:Connect(function(player)
    buying[player] = nil
    vipCreated[player] = nil
  end)
end


-- ================================================================
--  [6] LocalScript1.lua  (Client-Side)
--  إغلاق واجهة GUI عند الضغط على الزر
-- ================================================================

-- local gui    = script.Parent
-- local frame  = gui:WaitForChild("Frame")
-- local button = frame:WaitForChild("TextButton")
-- gui.Enabled = true
-- button.MouseButton1Click:Connect(function()
--   gui.Enabled = false
-- end)


-- ================================================================
--  [7] LocalScript2.lua  (Client-Side)
--  عرض رصيد اللاعب في الواجهة وتحديثه فوراً
-- ================================================================

-- local player     = game.Players.LocalPlayer
-- local leaderstats = player:WaitForChild("leaderstats")
-- local cash       = leaderstats:WaitForChild("Cash")
-- local label      = script.Parent
-- local function updateMoney() label.Text = tostring(cash.Value) end
-- updateMoney()
-- cash.Changed:Connect(updateMoney)
