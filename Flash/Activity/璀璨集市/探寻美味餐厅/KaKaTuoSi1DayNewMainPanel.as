package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   
   public class KaKaTuoSi1DayNewMainPanel extends ActivityModel
   {
      private var getNum:int;
      
      private var shopNum:int;
      
      private var curNum:int;
      
      public function KaKaTuoSi1DayNewMainPanel()
      {
         super();
         resUrl = "2022/0225/KaKaTuoSi1DayNewMainPanel";
         configUrl = "2022/0225/KaKaTuoSi1DayConfig";
      }
      
      override public function show() : void
      {
         if(!SystemTimerManager.getIsInActivity("20241004","2024101110"))
         {
            Alarm.show("不在活动时间内!");
            return;
         }
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         var i:int;
         this.getNum = getValue("getNum");
         this.shopNum = getValue("shopNum");
         this.curNum = getValue("curNum");
         _ui["bar"].gotoAndStop(this.shopNum + 1);
         if(this.curNum == 0)
         {
            _ui["mcNum"].gotoAndStop(1);
            CommonUI.setEnabled(_ui["gotoGame"],true);
         }
         else if(this.curNum == 1)
         {
            _ui["mcNum"].gotoAndStop(2);
            CommonUI.setEnabled(_ui["gotoGame"],true);
         }
         else
         {
            _ui["mcNum"].gotoAndStop(3);
            CommonUI.setEnabled(_ui["gotoGame"],false);
         }
         for(i = 1; i <= 6; i++)
         {
            if(KTool.getBit(this.getNum,i) == 1)
            {
               _ui["flag_" + i].visible = true;
               _ui["btn_" + i].mouseEnabled = false;
               _ui["okay_" + i].visible = false;
            }
            else
            {
               _ui["flag_" + i].visible = false;
               if(this.shopNum >= i)
               {
                  _ui["okay_" + i].visible = true;
               }
               else
               {
                  _ui["okay_" + i].visible = false;
               }
            }
         }
         if(BitBuffSetClass.getState(24487) == 0)
         {
            NpcDialog.show(4500,["小赛尔，虽然我的咖啡厅已经小有名气，但我相信总有我们可以学习的地方。"],["…"],[function():void
            {
               NpcDialog.show(4500,["我打算亲自去体验一下商业街上其他餐厅的服务和美食，你愿意和我一起去品尝美味，寻找灵感吗？"],["…"],[function():void
               {
                  NpcDialog.show(5545,["当然愿意！我最喜欢品尝各种不同的美食啦！"],["…"],[function():void
                  {
                     NpcDialog.show(4500,["我就知道你会感兴趣的。我听说有一家叫做“味觉盛宴”的餐厅，他们的服务非常周到，而且菜品种类丰富，咱们一起去试试吧。"],["…"],[function():void
                     {
                        NpcDialog.show(5545,["我已经迫不及待了！"],["…"],[function():void
                        {
                           BitBuffSetClass.setState(24487,1);
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("NationalDayActivityGoToMapPanel");
               break;
            case "gotoGame":
               ModuleManager.showAppModule("KaKaTuoSi1DayG1Panel");
               hide();
               break;
            case "btn_" + index:
               if(this.shopNum >= index)
               {
                  doAction("ChooseFood",index + 20).then(refresh);
               }
         }
      }
   }
}

