-- ============================================================
-- BankShiftScript.lua
-- مسؤول عن: فتح وإغلاق دوام موظف البنك عبر Proximity Prompts
-- ============================================================

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

  -- إذا اشترى العامل، العامل صار مسؤول عن البنك
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
