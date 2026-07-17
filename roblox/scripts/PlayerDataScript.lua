-- ============================================================
-- PlayerDataScript.lua
-- مسؤول عن: إنشاء بيانات كل لاعب عند دخوله (الرصيد، الوظيفة، الحالة)
-- ============================================================

game.Players.PlayerAdded:Connect(function(player)

  -- جدول الرصيد اللي يظهر في Leaderboard
  local leaderstats = Instance.new("Folder")
  leaderstats.Name = "leaderstats"
  leaderstats.Parent = player

  -- فلوس اللاعب
  local coins = Instance.new("IntValue")
  coins.Name = "Cash"
  coins.Value = 5000
  coins.Parent = leaderstats

  -- وظيفة اللاعب
  local job = Instance.new("StringValue")
  job.Name = "Job"
  job.Value = "بدون وظيفة"
  job.Parent = leaderstats

  -- عدد العملاء اللي خدمهم
  local completedCustomers = Instance.new("IntValue")
  completedCustomers.Name = "CompletedCustomers"
  completedCustomers.Value = 0
  completedCustomers.Parent = player

  -- هل اللاعب موظف بنك؟
  local isBankEmployee = Instance.new("BoolValue")
  isBankEmployee.Name = "IsBankEmployee"
  isBankEmployee.Value = false
  isBankEmployee.Parent = player

  -- هل البنك مفتوح؟
  local isBankOpen = Instance.new("BoolValue")
  isBankOpen.Name = "IsBankOpen"
  isBankOpen.Value = false
  isBankOpen.Parent = player

  -- هل اللاعب في الدوام؟
  local isWorking = Instance.new("BoolValue")
  isWorking.Name = "IsWorking"
  isWorking.Value = false
  isWorking.Parent = player

  -- حالة المهمة الحالية
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

  -- هل اللاعب ماسك فلوس؟
  local hasCashInHand = Instance.new("BoolValue")
  hasCashInHand.Name = "HasCashInHand"
  hasCashInHand.Value = false
  hasCashInHand.Parent = player

  -- كم مبلغ الفلوس اللي معه؟
  local cashInHandAmount = Instance.new("IntValue")
  cashInHandAmount.Name = "CashInHandAmount"
  cashInHandAmount.Value = 0
  cashInHandAmount.Parent = player

end)
