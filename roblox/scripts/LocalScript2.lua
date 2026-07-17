-- ============================================================
-- LocalScript2.lua
-- مسؤول عن: عرض رصيد اللاعب في الواجهة وتحديثه فوراً (Client-Side)
-- ============================================================

local player = game.Players.LocalPlayer

local leaderstats = player:WaitForChild("leaderstats")
local cash = leaderstats:WaitForChild("Cash")

local label = script.Parent

local function updateMoney()
  label.Text = tostring(cash.Value)
end

updateMoney()

cash.Changed:Connect(updateMoney)
