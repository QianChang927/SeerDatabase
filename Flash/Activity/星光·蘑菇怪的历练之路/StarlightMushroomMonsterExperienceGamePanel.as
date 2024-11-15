package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   
   public class StarlightMushroomMonsterExperienceGamePanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      public function StarlightMushroomMonsterExperienceGamePanel()
      {
         super();
         resUrl = "2024/1115/StarlightMushroomMonsterExperienceGamePanel";
         configUrl = "2024/1115/starlightMushroomMonsterExperienceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("StarlightMushroomMonsterExperienceMainPanel");
               break;
            case "chouquBtn":
               AnimateManager.playMcAnimate(_mainUI.playMc,1,"mc" + 1,function():void
               {
                  _mainUI.playMc.visible = false;
                  refresh();
                  openEvent();
               });
               break;
            case "fightBtn":
               this.hide();
               ModuleManager.showAppModule("StarlightMushroomMonsterExperienceFightPanel",index1);
               break;
            case "upBtn":
               this.hide();
               ModuleManager.showAppModule("StarlightMushroomMonsterExperienceUpPanel");
         }
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         this._commdId = getValue("comId")[0];
         var forever_105783:int = int(getValue("forever_105783"));
         var num:int = int(KTool.subByte(forever_105783,0,4));
         for(i = 0; i < 12; i++)
         {
            if(i < num)
            {
               _mainUI["bossMc_" + i].gotoAndStop(3);
               if(i == 10 || i == 11)
               {
                  _mainUI["nameMc_" + i].gotoAndStop(1);
               }
            }
            else if(i == num)
            {
               _mainUI["bossMc_" + i].gotoAndStop(2);
               if(i == 10 || i == 11)
               {
                  _mainUI["nameMc_" + i].gotoAndStop(1);
               }
            }
            else
            {
               _mainUI["bossMc_" + i].gotoAndStop(1);
               if(i == 10 || i == 11)
               {
                  _mainUI["nameMc_" + i].gotoAndStop(2);
               }
            }
         }
         var curStarLv:int = int(KTool.subByte(forever_105783,16,8));
         var exp:int = int(KTool.subByte(forever_105783,24,8));
         for(i = 0; i < 4; i++)
         {
            if(i < curStarLv)
            {
               _mainUI.starMc["mc_" + i].gotoAndStop(1);
            }
            else
            {
               _mainUI.starMc["mc_" + i].gotoAndStop(2);
            }
         }
         _mainUI.btnMc.gotoAndStop(curStarLv >= 4 ? 2 : 1);
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

