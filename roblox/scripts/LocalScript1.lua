-- ============================================================
-- LocalScript1.lua
-- مسؤول عن: إغلاق واجهة GUI عند الضغط على الزر (Client-Side)
-- ============================================================

local gui = script.Parent
local frame = gui:WaitForChild("Frame")
local button = frame:WaitForChild("TextButton")

gui.Enabled = true

button.MouseButton1Click:Connect(function()
  gui.Enabled = false
end)
