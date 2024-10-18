package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public class UltramanSeriesGoToMapPanel extends ActivityModel
   {
      private var gotoMap:Array;
      
      private var curBit:int;
      
      private var curBit1:int;
      
      private var curBit2:int;
      
      private var curBit3:int;
      
      public function UltramanSeriesGoToMapPanel()
      {
         this.gotoMap = ["GetDiJiaAoTeManMainPanel","SairoUltramanOutputMainPanel","AoTeMan_BeiLiYaMainPanel","AotemanSkinPanel","AoTeMan_KeYinShouMaiMainPanel","GetDiJiaAoTeManMainPanel","GetDiJiaAoTeManMainPanel"];
         super();
         resUrl = "2024/1018/UltramanSeriesGoToMapPanel";
         configUrl = "2024/1018/UltramanSeriesGoToMap";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1018奥特曼活动集合面板","打开了奥特曼集合面板","2024运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.curBit = getValue("curBit");
         this.curBit1 = getValue("curBit1");
         this.curBit2 = getValue("curBit2");
         this.curBit3 = getValue("curBit3");
         for(var i:int = 1; i <= 5; i++)
         {
            if(BitBuffSetClass.getState(24502 + i) == 0)
            {
               _ui["red_" + i].visible = true;
            }
            else
            {
               _ui["red_" + i].visible = false;
            }
         }
         _ui["mc_1"].gotoAndStop(this.curBit1 == 1 ? 2 : 1);
         _ui["mc_2"].gotoAndStop(this.curBit2 == 1 ? 2 : 1);
         _ui["mc_3"].gotoAndStop(this.curBit3 == 1 ? 2 : 1);
         if(this.curBit1 == 1 && this.curBit2 == 1 && this.curBit3 == 1)
         {
            if(this.curBit == 1)
            {
               _ui["getMc"].gotoAndStop(3);
            }
            else
            {
               _ui["getMc"].gotoAndStop(2);
            }
         }
         else
         {
            _ui["getMc"].gotoAndStop(1);
         }
         _ui["red_6"].visible = false;
         _ui["red_7"].visible = false;
         CommonUI.setEnabled(_ui["go_6"],false);
         CommonUI.setEnabled(_ui["go_7"],false);
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               this.hide();
               break;
            case "go_" + index:
               StatManager.sendStat2014("1018奥特曼活动集合面板","点击了第" + index + "个活动跳转","2024运营活动");
               if(BitBuffSetClass.getState(24502 + index) == 0)
               {
                  BitBuffSetClass.setState(24502 + index,1);
               }
               ModuleManager.showAppModule(this.gotoMap[index - 1]);
               this.hide();
               break;
            case "getBtn":
               doAction("FlgeReq1",1).then(function():void
               {
                  refresh();
                  Alarm2.show("恭喜您成功获得【光暗对决】名片，请前往《赛尔号巅峰之战》使用！");
               });
               break;
            case "gooBtn":
               navigateToURL(new URLRequest("https://seer.61.com/events/seer_ultraman_activity/"),"_blank");
         }
      }
      
      private function showPage() : void
      {
         _ui["page"].visible = true;
         _ui["page"]["mc_1"].gotoAndStop(this.curBit1 == 1 ? 2 : 1);
         _ui["page"]["mc_2"].gotoAndStop(this.curBit2 == 1 ? 2 : 1);
         _ui["page"]["mc_3"].gotoAndStop(this.curBit3 == 1 ? 2 : 1);
      }
      
      override public function hide() : void
      {
         this.gotoMap = null;
         super.hide();
      }
   }
}

