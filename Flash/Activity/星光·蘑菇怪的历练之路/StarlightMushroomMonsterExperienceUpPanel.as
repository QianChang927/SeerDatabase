package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class StarlightMushroomMonsterExperienceUpPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _addExpArr:Array;
      
      private var _leftNum:int;
      
      private var _curFightIndex:int;
      
      private var _curStarLv:int;
      
      private var _oldStarLv:int = -1;
      
      public function StarlightMushroomMonsterExperienceUpPanel()
      {
         super();
         resUrl = "2024/1115/StarlightMushroomMonsterExperienceUpPanel";
         configUrl = "2024/1115/starlightMushroomMonsterExperienceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
         this._oldStarLv = data as int;
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var btnName:String = e.target.name;
         index = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("StarlightMushroomMonsterExperienceGamePanel");
               break;
            case "fightBtn_" + index:
               if(this._curStarLv >= 4)
               {
                  Alarm2.show("星光·蘑菇怪等级已满！");
                  return;
               }
               if(this._leftNum > 0)
               {
                  this._curFightIndex = index;
                  this.hide();
                  sendCmd(41864,[this._curFightIndex + 1],function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  });
               }
               else
               {
                  Alarm2.show("今日剩余获取经验次数不足！");
               }
               break;
            case "aKeyPassBtn_" + index:
               if(this._curStarLv >= 4)
               {
                  Alarm2.show("星光·蘑菇怪等级已满！");
                  return;
               }
               KTool.buyProductByCallback(261070 + index,1,function():void
               {
                  _oldStarLv = _curStarLv;
                  sendCmd(45850,[24,4 + index],function():void
                  {
                     refresh();
                     Alarm2.show("恭喜你，星光·蘑菇怪获得了" + _addExpArr[index] + "点经验值！");
                  });
               },_mainUI);
               break;
            case "addBtn":
               if(this._curStarLv >= 4)
               {
                  Alarm2.show("星光·蘑菇怪等级已满！");
                  return;
               }
               KTool.buyProductByCallback(261073,1,function():void
               {
                  KTool.doExchange(14435,function():void
                  {
                     refresh();
                  });
               },_mainUI);
               break;
         }
      }
      
      private function fightOverHandler(e:PetFightEvent) : void
      {
         var addExpArr:Array = null;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fightOverHandler);
         if(FightManager.isWin)
         {
            addExpArr = [10,15,20];
            Alarm2.show("恭喜你，星光·蘑菇怪获得了" + addExpArr[this._curFightIndex] + "点经验值！");
            ModuleManager.showAppModule("StarlightMushroomMonsterExperienceUpPanel",this._curStarLv);
         }
         else
         {
            ModuleManager.showAppModule("StarlightMushroomMonsterExperienceUpPanel");
         }
      }
      
      override protected function updatePanel() : void
      {
         this._commdId = getValue("comId")[0];
         var forever_105783:int = int(getValue("forever_105783"));
         var daily_11900:int = int(getValue("daily_11900"));
         this._addExpArr = getValue("addExpArr");
         this._curStarLv = KTool.subByte(forever_105783,16,8);
         var expNum:int = int(KTool.subByte(forever_105783,24,8));
         for(var i:int = 0; i < 4; i++)
         {
            if(i < this._curStarLv)
            {
               _mainUI.starMc["mc_" + i].gotoAndStop(1);
            }
            else
            {
               _mainUI.starMc["mc_" + i].gotoAndStop(2);
            }
         }
         _mainUI.expTx.text = this._curStarLv >= 4 ? "已满" : expNum + "/100";
         this._leftNum = 6 - daily_11900;
         _mainUI.numTx.text = this._leftNum + "/6";
         if(this._leftNum <= 0)
         {
            CommonUI.setEnabled(_mainUI.addBtn,true,false);
         }
         else
         {
            CommonUI.setEnabled(_mainUI.addBtn,false,true);
         }
         if(this._curStarLv > this._oldStarLv && this._oldStarLv < 4 && this._oldStarLv >= 0)
         {
            Alarm2.show("恭喜你，星光·蘑菇怪的等级提升了！");
            this._oldStarLv = -1;
         }
      }
      
      override public function hide() : void
      {
         this._addExpArr = null;
         super.hide();
      }
   }
}

