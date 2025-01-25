package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.CommonUI;
   
   public class NewYearsDaySpiritPageantS2Panel extends ActivityModel
   {
      protected var m_BossIndex:int;
      
      protected var m_sign:int;
      
      public function NewYearsDaySpiritPageantS2Panel()
      {
         super();
         resUrl = "2018/1229/NewYearsDaySpiritPageantS2Panel";
         configUrl = "2018/1229/NewYearsDaySpiritPageant";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1229元旦节精灵庆典","打开猜测面板","2018运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.m_BossIndex = getValue("bossIndex");
         this.m_sign = getValue("sign");
         if(KTool.getBit(this.m_sign,13) == 1)
         {
            CommonUI.setEnabled(_ui["yes_1"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["yes_1"],true);
         }
         if(KTool.getBit(this.m_sign,14) == 1)
         {
            CommonUI.setEnabled(_ui["yes_2"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["yes_2"],true);
         }
         if(KTool.getBit(this.m_sign,15) == 1)
         {
            CommonUI.setEnabled(_ui["yes_3"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["yes_3"],true);
         }
         if(KTool.getBit(this.m_sign,16) == 1)
         {
            CommonUI.setEnabled(_ui["yes_4"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["yes_4"],true);
         }
         this._setUI();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               break;
            case "yes_" + index:
               hide();
               ModuleManager.showAppModule("NewYearsDaySpiritPageantS3Panel",index);
         }
      }
      
      private function _setUI() : void
      {
         if(this.m_BossIndex == 1)
         {
            _ui["mc"].gotoAndStop(1);
         }
         else if(this.m_BossIndex == 2)
         {
            _ui["mc"].gotoAndStop(2);
         }
         else if(this.m_BossIndex == 3)
         {
            _ui["mc"].gotoAndStop(4);
         }
         else
         {
            _ui["mc"].gotoAndStop(3);
         }
      }
   }
}

