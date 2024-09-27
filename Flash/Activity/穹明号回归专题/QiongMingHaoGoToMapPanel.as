package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class QiongMingHaoGoToMapPanel extends ActivityModel
   {
      private var boo:Boolean;
      
      private var gotoMap:Array;
      
      public function QiongMingHaoGoToMapPanel()
      {
         this.gotoMap = ["StarCafeMainPanel","SpetWeiYueMainPanel","GetHuoGuangMainPanel","CafeSkinSalesMainPanel","Anniversary14thMarkSaleMainPanel","SellSeriesSkins_CangYinXingHai","LongTengSiHaiGetSkilMainPanel"];
         super();
         resUrl = "2024/0927/QiongMingHaoGoToMapPanel";
         configUrl = "2022/1216/CultivationGoToMap";
      }
      
      override public function show() : void
      {
         super.show();
         _ui["tipss_1"].visible = false;
         _ui["tipss_2"].visible = false;
         _ui["mc"].addFrameScript(_ui["mc"].totalFrames - 1,this.playOverHandle);
         StatManager.sendStat2014("0927穹明号回归专题集合面板","打开了集合面板","2024运营活动");
      }
      
      private function playOverHandle() : void
      {
         this.boo = true;
         _ui["mc"].gotoAndStop(_ui["mc"].totalFrames);
         refresh();
      }
      
      override protected function updatePanel() : void
      {
         if(!this.boo)
         {
            return;
         }
         if(BitBuffSetClass.getState(24488) == 0)
         {
            _ui["tipss_1"].visible = true;
         }
         else
         {
            _ui["tipss_1"].visible = false;
         }
         if(BitBuffSetClass.getState(24489) == 0)
         {
            _ui["tipss_2"].visible = true;
         }
         else
         {
            _ui["tipss_2"].visible = false;
         }
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
               if(index == 1 && BitBuffSetClass.getState(24488) == 0)
               {
                  BitBuffSetClass.setState(24488,1);
               }
               if(index == 4 && BitBuffSetClass.getState(24489) == 0)
               {
                  BitBuffSetClass.setState(24489,1);
               }
               StatManager.sendStat2014("0927穹明号回归专题集合面板","点击第" + index + "个活动跳转：" + this.gotoMap[index - 1],"2024运营活动");
               ModuleManager.showAppModule(this.gotoMap[index - 1]);
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         this.gotoMap = null;
         _ui["mc"].addFrameScript(_ui["mc"].totalFrames - 1,null);
         super.hide();
      }
   }
}

