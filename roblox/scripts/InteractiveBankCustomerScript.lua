-- ============================================================
-- InteractiveBankCustomerScript.lua
-- مسؤول عن: التفاعل مع عملاء البنك وإدارة مراحل البناء للبنك التفاعلي
-- ============================================================

local Players = game:GetService("Players")

local steps = {
  {
    Button = "BuildButton1",
    Target = "BankFloor",
    Cost = 1000,
    Title = "بناء الأرضية",
    NextButton = "BuildButton2"
  },

  {
    Button = "BuildButton2",
    Target = "BankBuilding",
    Cost = 5000,
    Title = "بناء البنك",
    NextButton = "BuildButton3"
  },

  {
    Button = "BuildButton3",
    Target = "Interior1",
    Cost = 500,
    Title = "أثاث داخلي 1",
    NextButton = "BuildButton4"
  },

  {
    Button = "BuildButton4",
    Target = "Interior2",
    Cost = 400,
    Title = "أثاث داخلي 2",
    NextButton = "BuildButton5"
  },

  {
    Button = "BuildButton5",
    Target = "Interior3",
    Cost = 600,
    Title = "أثاث داخلي 3",
    NextButton = "BuildButton6"
  },

  {
    Button = "BuildButton6",
    Target = "Interior4",
    Cost = 400,
    Title = "أثاث داخلي 4",
    NextButton = "BuildButton8"
  },

  {
    Button = "BuildButton8",
    Target = "mydesk",
    Cost = 900,
    Title = "بناء مكتب المدير",
    NextButton = nil,
    IsFinalStep = true
  }
}

local targetSaved = {}
local buttonSaved = {}
local labels = {}
local defaultMessages = {}

-- حالة الشراء لكل لاعب
local bought = {}
local cooldown = {}

local function findObject(name)
  return workspace:FindFirstChild(name, true)
end

local function getParts(object)
  local parts = {}

  if not object then
    return parts
  end

  if object:IsA("BasePart") then
    table.insert(parts, object)
  end

  for _, item in ipairs(object:GetDescendants()) do
    if item:IsA("BasePart") then
      table.insert(parts, item)
    end
  end

  return parts
end

local function createMessageGui(button, message)
  local parts = getParts(button)
  local mainPart = parts[1]

  if not mainPart then
    return
  end

  local oldGui = mainPart:FindFirstChild("PriceGui")

  if oldGui then
    oldGui:Destroy()
  end

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
      targetSaved[index][item] = {
        Class = "BasePart",
        Transparency = item.Transparency,
        CanCollide = item.CanCollide,
        CanTouch = item.CanTouch
      }

      item.Transparency = 1
      item.CanCollide = false
      item.CanTouch = false
      item.Anchored = true

    elseif item:IsA("Decal") or item:IsA("Texture") then
      targetSaved[index][item] = {
        Class = "Texture",
        Transparency = item.Transparency
      }

      item.Transparency = 1

    elseif item:IsA("SurfaceGui") or item:IsA("BillboardGui") then
      targetSaved[index][item] = {
        Class = "Gui",
        Enabled = item.Enabled
      }

      item.Enabled = false
    end
  end

  saveItem(target)

  for _, item in ipairs(target:GetDescendants()) do
    saveItem(item)
  end
end

local function showTarget(index)
  local saved = targetSaved[index]

  if not saved then
    return
  end

  for item, data in pairs(saved) do
    if item and item.Parent then
      if data.Class == "BasePart" then
        item.Transparency = data.Transparency
        item.CanCollide = data.CanCollide
        item.CanTouch = data.CanTouch
        item.Anchored = true

      elseif data.Class == "Texture" then
        item.Transparency = data.Transparency

      elseif data.Class == "Gui" then
        item.Enabled = data.Enabled
      end
    end
  end
end

local function saveButton(index, button)
  buttonSaved[index] = {}

  for _, part in ipairs(getParts(button)) do
    buttonSaved[index][part] = {
      Transparency = part.Transparency,
      CanCollide = part.CanCollide,
      CanTouch = part.CanTouch
    }
  end
end

local function hideButton(index)
  local step = steps[index]
  local button = findObject(step.Button)

  if not button then
    return
  end

  for _, part in ipairs(getParts(button)) do
    part.Transparency = 1
    part.CanCollide = false
    part.CanTouch = false
    part.Anchored = true
  end

  for _, item in ipairs(button:GetDescendants()) do
    if item:IsA("BillboardGui") or item:IsA("SurfaceGui") then
      item.Enabled = false
    end
  end
end

local function showButton(index)
  local step = steps[index]
  local button = findObject(step.Button)

  if not button then
    warn("لم يتم العثور على الزر: " .. step.Button)
    return
  end

  for _, part in ipairs(getParts(button)) do
    local saved = buttonSaved[index] and buttonSaved[index][part]

    if saved then
      part.Transparency = saved.Transparency
      part.CanCollide = saved.CanCollide
    else
      part.Transparency = 0
      part.CanCollide = true
    end

    part.CanTouch = true
    part.Anchored = true
  end

  for _, item in ipairs(button:GetDescendants()) do
    if item:IsA("BillboardGui") or item:IsA("SurfaceGui") then
      item.Enabled = true
    end
  end
end

local function setLabelMessage(index, text, seconds)
  local label = labels[index]

  if not label then
    return
  end

  label.Text = text

  task.delay(seconds or 1.5, function()
    if label and label.Parent then
      label.Text = defaultMessages[index] or "أكمل المهمة السابقة"
    end
  end)
end

local function promoteToManager(player)
  if player:GetAttribute("IsManager") == true then
    return
  end

  player:SetAttribute("IsManager", true)

  local leaderstats = player:FindFirstChild("leaderstats")
  local job = leaderstats and leaderstats:FindFirstChild("Job")

  if job then
    job.Value = "مدير بنك"
  end

  local currentTask = player:FindFirstChild("CurrentBankTask")

  if currentTask then
    currentTask.Value = "VIPDeposit"
  end

  print(player.Name .. " تمت ترقيته إلى مدير بنك")
end

local function buyStep(index, player)
  local playerId = player.UserId

  bought[playerId] = bought[playerId] or {}

  if bought[playerId][index] then
    return
  end

  local step = steps[index]

  -- لا يمكن بناء البنك الثاني قبل شراء العامل
  if player:GetAttribute("OwnsWorker") ~= true then
    setLabelMessage(index, "يجب توظيف العامل أولًا!", 2)
    return
  end

  local stats = player:FindFirstChild("leaderstats")

  if not stats then
    return
  end

  local cash = stats:FindFirstChild("Cash")

  if not cash then
    return
  end

  if cash.Value < step.Cost then
    setLabelMessage(
      index,
      "رصيدك غير كافٍ! تحتاج " .. step.Cost .. "$",
      2
    )

    return
  end

  cash.Value -= step.Cost
  bought[playerId][index] = true

  showTarget(index)
  hideButton(index)

  -- عند اكتمال المكتب يصبح اللاعب مديرًا
  if step.IsFinalStep then
    promoteToManager(player)
    return
  end

  -- إظهار الزر التالي
  if step.NextButton then
    for nextIndex, nextStep in ipairs(steps) do
      if nextStep.Button == step.NextButton then
        showButton(nextIndex)
        break
      end
    end
  end
end

local function connectButton(index, button)
  for _, part in ipairs(getParts(button)) do
    part.Touched:Connect(function(hit)
      local character = hit:FindFirstAncestorOfClass("Model")

      if not character then
        return
      end

      local humanoid = character:FindFirstChildOfClass("Humanoid")

      if not humanoid then
        return
      end

      local player = Players:GetPlayerFromCharacter(character)

      if not player then
        return
      end

      local key = tostring(player.UserId) .. "_" .. tostring(index)

      if cooldown[key] then
        return
      end

      cooldown[key] = true

      buyStep(index, player)

      task.delay(1, function()
        cooldown[key] = nil
      end)
    end)
  end
end

--------------------------------------------------
-- تجهيز الأزرار والأجزاء
--------------------------------------------------

for index, step in ipairs(steps) do
  local button = findObject(step.Button)
  local target = findObject(step.Target)

  if not button then
    warn("Button not found: " .. step.Button)
  else
    saveButton(index, button)

    local priceText = step.Title .. "\n$" .. step.Cost
    defaultMessages[index] = priceText
    labels[index] = createMessageGui(button, priceText)
  end

  if not target then
    warn("Target not found: " .. step.Target)
  else
    saveAndHideTarget(index, target)
  end
end

--------------------------------------------------
-- إخفاء جميع أزرار البناء في البداية
--------------------------------------------------

for index in ipairs(steps) do
  hideButton(index)
end

--------------------------------------------------
-- ربط لمس الأزرار
--------------------------------------------------

for index, step in ipairs(steps) do
  local button = findObject(step.Button)

  if button then
    connectButton(index, button)
  end
end

--------------------------------------------------
-- تنظيف بيانات اللاعب
--------------------------------------------------

Players.PlayerRemoving:Connect(function(player)
  bought[player.UserId] = nil

  for key in pairs(cooldown) do
    if string.find(key, tostring(player.UserId), 1, true) == 1 then
      cooldown[key] = nil
    end
  end
end)
