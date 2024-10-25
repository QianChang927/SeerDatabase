package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.CommonUI;
   
   public class AttackTiPuSiMainPanel extends ActivityModel
   {
      private var _bit:int;
      
      private var _gameCount:int;
      
      public function AttackTiPuSiMainPanel()
      {
         super();
         configUrl = "2024/1025/AttackTiPuSi";
         resUrl = "2024/1025/AttackTiPuSiMainPanel";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this._bit = getValue("_bit");
         this._gameCount = getValue("_gameCount");
         _ui["flag_1"].visible = false;
         if(this._gameCount != 5)
         {
            _ui["pageTxt"].visible = true;
            _ui["pageMcc"].visible = true;
            _ui["pageTip"].visible = true;
            if(KTool.getBit(this._bit,26) == 1)
            {
               _ui["goMc"].gotoAndStop(2);
            }
            else
            {
               _ui["goMc"].gotoAndStop(1);
            }
            if(KTool.getBit(this._bit,27) == 1)
            {
               _ui["pageTxt"].gotoAndStop(2);
               _ui["goMc"].gotoAndStop(1);
               CommonUI.setEnabled(_ui["goMc"]["goto"],false);
               _ui["flag_1"].visible = true;
            }
            else
            {
               _ui["pageTxt"].gotoAndStop(1);
            }
         }
         else
         {
            _ui["goMc"].gotoAndStop(3);
            _ui["pageTxt"].visible = false;
            _ui["pageMcc"].visible = false;
            _ui["pageTip"].visible = false;
         }
         _ui["pageMcc"].gotoAndStop(this._gameCount + 1);
      }
      
      private function playAnimation() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("AttackTiPuSiS1"),this.stopPlaying);
      }
      
      private function stopPlaying() : void
      {
         BitBuffSetClass.setState(24093,1);
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         switch(btn_name)
         {
            case "goto":
               doAction("FlgeReq1",1).then(function():void
               {
                  hide();
                  ModuleManager.showAppModule("AttackTiPuSiS1Panel");
               });
               break;
            case "goonGo":
               hide();
               ModuleManager.showAppModule("AttackTiPuSiS1Panel");
               break;
            case "close":
               hide();
               ModuleManager.showAppModule("UltramanSeriesGoToMapPanel");
         }
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}

