-- ============================================================
-- QuickWorkerAndVIP.lua
-- مسؤول عن: شراء العامل، ترقية المدير، وإنشاء عميل VIP بمليون دولار
-- ============================================================

local Players = game:GetService("Players")
local ServerStorage = game:GetService("ServerStorage")

local REQUIRED_CASH = 5000
local WORKER_COST = 5000
local VIP_AMOUNT = 1000000

local bankSystem = workspace:WaitForChild("BankSystem")

local workerButton = bankSystem:WaitForChild("WorkerBuyButton")
local workerPrompt = workerButton:WaitForChild("ProximityPrompt")
workerButton.Transparency = 1
workerButton.CanCollide = false
workerPrompt.Enabled = false
local workerSpawnPoint = workspace.BankSystem.WorkerSpawnPoint
local vipPoint = bankSystem:WaitForChild("VIPPoint")
local customerSpawnPoint = bankSystem:WaitForChild("CustomerSpawnPoint")
local customerExitPoint = bankSystem:WaitForChild("CustomerExitPoint")

local customerTemplate = ServerStorage:WaitForChild("BankCustomer")

local vipCreated = {}
local buying = {}

--------------------------------------------------
-- إشعار على الشاشة
--------------------------------------------------

local function showMessage(player, titleText, messageText)
  local playerGui = player:FindFirstChild("PlayerGui")
  if not playerGui then return end

  local oldGui = playerGui:FindFirstChild("QuickNotificationGui")
  if oldGui then
    oldGui:Destroy()
  end

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

  task.delay(5, function()
    if gui.Parent then
      gui:Destroy()
    end
  end)
end

--------------------------------------------------
-- إظهار وإخفاء الأزرار
--------------------------------------------------

local function setVisible(object, visible)
  local function update(item)
    if item:IsA("BasePart") then
      item.Transparency = visible and 0 or 1
      item.CanCollide = visible
      item.CanTouch = visible

    elseif item:IsA("ProximityPrompt") then
      item.Enabled = visible

    elseif item:IsA("BillboardGui") or item:IsA("SurfaceGui") then
      item.Enabled = visible
    end
  end

  update(object)

  for _, item in ipairs(object:GetDescendants()) do
    update(item)
  end
end

-- أخفِ زر العامل عند بداية اللعبة
setVisible(workerButton, false)

--------------------------------------------------
-- كتابة نص فوق NPC
--------------------------------------------------

local function setNpcText(npc, text)
  local head = npc:FindFirstChild("Head")
  if not head then return end

  local oldGui = head:FindFirstChild("QuickNpcGui")
  if oldGui then
    oldGui:Destroy()
  end

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

--------------------------------------------------
-- إنشاء العامل
--------------------------------------------------

local function createWorker(player)
  local oldWorker = workspace:FindFirstChild("BankWorker_" .. player.UserId)

  if oldWorker then
    oldWorker:Destroy()
  end

  -- نستخدم نفس BankCustomer لتوفير الوقت
  local worker = customerTemplate:Clone()
  worker.Name = "BankWorker_" .. player.UserId
  worker.Parent = workspace
  worker:PivotTo(workerSpawnPoint.CFrame)

  setNpcText(worker, "موظف البنك")

  local root = worker:FindFirstChild("HumanoidRootPart")
  if root then
    root.Anchored = true
  end
end

--------------------------------------------------
-- إنشاء نجمة VIP
--------------------------------------------------

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

--------------------------------------------------
-- الحصول على Part من mydesk
--------------------------------------------------

local function getDeskPart()
  local desk = workspace:FindFirstChild("mydesk", true)
  if not desk then return nil end

  if desk:IsA("BasePart") then
    return desk
  end

  return desk:FindFirstChildWhichIsA("BasePart", true)
end

--------------------------------------------------
-- إنشاء عميل VIP
--------------------------------------------------

local function createVipCustomer(player)
  if vipCreated[player] then return end
  vipCreated[player] = true

  local deskPart = getDeskPart()

  if not deskPart then
    warn("لم يتم العثور على mydesk")
    return
  end

  local customer = customerTemplate:Clone()
  customer.Name = "VIPCustomer_" .. player.UserId
  customer.Parent = workspace
  customer:PivotTo(customerSpawnPoint.CFrame)

  customer:SetAttribute("TransactionType", "Deposit")
  customer:SetAttribute("Amount", VIP_AMOUNT)

  addVipStar(customer)
  setNpcText(customer, "أريد إيداع 1,000,000$")

  local humanoid = customer:FindFirstChildOfClass("Humanoid")
  if humanoid then
    humanoid:MoveTo(vipPoint.Position)
  end

  local oldPrompt = deskPart:FindFirstChild("VIPDepositPrompt")
  if oldPrompt then
    oldPrompt:Destroy()
  end

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

    showMessage(
      player,
      "تمت العملية بنجاح",
      "تم استلام إيداع عميل VIP بقيمة 1,000,000$."
    )

    local completed = player:FindFirstChild("CompletedCustomers")
    if completed then
      completed.Value += 1
    end

    if humanoid then
      humanoid:MoveTo(customerExitPoint.Position)
    end

    task.wait(3)

    if customer.Parent then
      customer:Destroy()
    end

    prompt:Destroy()
  end)
end

--------------------------------------------------
-- مراقبة ترقية المدير
--------------------------------------------------

local function setupManagerMonitor(player)
  player:GetAttributeChangedSignal("IsManager"):Connect(function()
    if player:GetAttribute("IsManager") == true then
      showMessage(
        player,
        "🎉 تمت ترقيتك إلى مدير!",
        "اذهب إلى مكتبك. سيصل الآن عميل VIP لإيداع مليون."
      )

      task.wait(3)
      createVipCustomer(player)
    end
  end)
end

--------------------------------------------------
-- مراقبة وصول الرصيد إلى 5000
--------------------------------------------------

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

      showMessage(
        player,
        "يمكنك الآن توظيف عامل!",
        "اذهب إلى زر العامل داخل البنك الأول."
      )
    end
  end

  cash:GetPropertyChangedSignal("Value"):Connect(checkCash)
  checkCash()
end

--------------------------------------------------
-- شراء العامل
--------------------------------------------------

workerPrompt.Triggered:Connect(function(player)
  if buying[player] then return end
  buying[player] = true

  local leaderstats = player:FindFirstChild("leaderstats")
  local cash = leaderstats and leaderstats:FindFirstChild("Cash")
  local job = leaderstats and leaderstats:FindFirstChild("Job")

  if not cash then
    buying[player] = nil
    return
  end

  if not player:GetAttribute("WorkerUnlocked") then
    showMessage(
      player,
      "العامل غير متاح",
      "يجب أن يصل رصيدك إلى 15,000$."
    )

    buying[player] = nil
    return
  end

  if player:GetAttribute("OwnsWorker") then
    buying[player] = nil
    return
  end

  if cash.Value < WORKER_COST then
    showMessage(
      player,
      "رصيدك غير كافٍ",
      "تحتاج إلى 10,000$ لشراء العامل."
    )

    buying[player] = nil
    return
  end

  cash.Value -= WORKER_COST

  player:SetAttribute("OwnsWorker", true)
  player:SetAttribute("IsManager", true)

  if job then
    job.Value = "مدير بنك"
  end

  createWorker(player)

  -- العامل استلم العمل في البنك الأول
  local isOpen = player:FindFirstChild("IsBankOpen")
  local currentTask = player:FindFirstChild("CurrentBankTask")
  local workerBought = player:FindFirstChild("WorkerBought")
  local isManagerValue = player:FindFirstChild("IsManager")

  if isOpen then isOpen.Value = false end
  if currentTask then currentTask.Value = "WorkerHandlingBank" end
  if workerBought then workerBought.Value = true end
  if isManagerValue then isManagerValue.Value = true end

  workerButton.Transparency = 1
  workerButton.CanCollide = false
  workerPrompt.Enabled = false

  showMessage(
    player,
    "🎉 تمت ترقيتك!",
    "أصبحت الآن مدير بنك.\n\nالمهمة الجديدة:\nاستقبل أول عميل VIP."
  )

  task.wait(1)
  buying[player] = nil
end)

--------------------------------------------------
-- بداية السكربت
--------------------------------------------------

setVisible(workerButton, false)

local buildButton1 = workspace:FindFirstChild("BuildButton1", true)
if buildButton1 then
  setVisible(buildButton1, false)
end

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
