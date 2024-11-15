package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.BitUtils;
   
   public class StarlightMushroomMonsterExperienceFightPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _curBossIndex:int = 0;
      
      public function StarlightMushroomMonsterExperienceFightPanel()
      {
         super();
         resUrl = "2024/1115/StarlightMushroomMonsterExperienceFightPanel";
         configUrl = "2024/1115/starlightMushroomMonsterExperienceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
         this._curBossIndex = data as int;
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var commdId:* = undefined;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("StarlightMushroomMonsterExperienceGamePanel");
               break;
            case "fightBtn":
               commdId = getValue("comId")[1];
               sendCmd(41863,[],function():void
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
               });
         }
      }
      
      private function fightOverHandler(e:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fightOverHandler);
         if(FightManager.isWin)
         {
            ModuleManager.showAppModule("StarlightMushroomMonsterExperienceGamePanel");
         }
         else
         {
            ModuleManager.showAppModule("StarlightMushroomMonsterExperienceFightPanel",this._curBossIndex);
         }
      }
      
      override protected function updatePanel() : void
      {
         var forever_105783:int;
         var bossStarArr:Array;
         this._commdId = getValue("comId")[0];
         forever_105783 = int(getValue("forever_105783"));
         bossStarArr = getValue("bossStarArr");
         _mainUI.bossMc.gotoAndStop(this._curBossIndex + 1);
         _mainUI.descMc.gotoAndStop(this._curBossIndex + 1);
         _mainUI.nameMc.gotoAndStop(this._curBossIndex + 1);
         _mainUI.startMc.gotoAndStop(bossStarArr[this._curBossIndex]);
         if(this._curBossIndex == 10 || this._curBossIndex == 11)
         {
            if(BitUtils.getBit(forever_105783,this._curBossIndex - 2) == 0)
            {
               DialogControl.showAllDilogs(167,this._curBossIndex - 9).then(function():void
               {
                  sendCmd(_commdId,[24,2 + (_curBossIndex - 10)],function():void
                  {
                     refresh();
                  });
               });
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

