package com.robot.app2.mapProcess
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   
   public class MapProcess_1498 extends BaseMapProcess
   {
       
      
      private var _commdId:int = 41285;
      
      private var cron1:Array;
      
      private var cron2:Array;
      
      private var ac1:ActivityControl;
      
      private var ac2:ActivityControl;
      
      private var _curPage:int = 0;
      
      private var _allPage:int;
      
      private var _curTimeIndex:int = 0;
      
      private var _surplusTime:int;
      
      private var _boxNameArr:Array;
      
      private var _startTime:int = 0;
      
      public var _map:MapModel;
      
      public function MapProcess_1498()
      {
         this.cron1 = [new CronTimeVo("*","12-13","*","*","*","*")];
         this.cron2 = [new CronTimeVo("*","19-20","*","*","*","*")];
         this._boxNameArr = ["至臻","钻石","黄金","白银","青铜"];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         MapNamePanel.hide();
         LevelManager.iconLevel.visible = false;
         this.update();
         SystemTimerManager.addTickFun(this.onTimer);
         if(!BufferRecordManager.getMyState(1538))
         {
            BufferRecordManager.setMyState(1538,true,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_biologicalWeaponsOfTerror"),function():void
               {
               });
            });
         }
         ModuleManager.showAppModule("BiologicalWeaponsOfTerrorMainPanel");
      }
      
      private function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "bossBtn":
               ModuleManager.showAppModule("BiologicalWeaponsOfTerrorMainPanel");
               break;
            case "rankBtn":
               ModuleManager.showAppModule("BiologicalWeaponsOfTerrorMainPanel",true);
               break;
            case "cureBtn":
               PetManager.cureAllFree();
               break;
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
               });
         }
      }
      
      private function update() : void
      {
         KTool.getMultiValue([107923,200280],function(param1:Array):void
         {
            var va:Array = param1;
            KTool.getGlobalValues(10030,[1,2],function(param1:Array):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               var _loc4_:Date = null;
               var _loc5_:Date = null;
               if(isOpenTime())
               {
                  _loc2_ = 1000000 - param1[_curTimeIndex - 1];
                  _map.controlLevel["barMc"].visible = true;
                  _loc2_ = _loc2_ < 0 ? 0 : _loc2_;
                  _map.controlLevel["barMc"].numTx.text = _loc2_ + "/1000000";
                  _loc3_ = int(_loc2_ / 1000000 * 100) > 0 ? int(_loc2_ / 1000000 * 100) : 1;
                  _map.controlLevel["barMc"].bar.gotoAndStop(_loc3_);
                  if(_loc2_ > 0)
                  {
                     _map.controlLevel["btnMc"].gotoAndStop(1);
                  }
                  else
                  {
                     _map.controlLevel["btnMc"].gotoAndStop(2);
                     if(BitUtils.getBit(va[1],_curTimeIndex - 1 + 4) > 0)
                     {
                        CommonUI.setEnabled(_map.controlLevel["btnMc"],false,true);
                     }
                     else if(_loc2_ <= 0)
                     {
                        CommonUI.setEnabled(_map.controlLevel["btnMc"],true,false);
                     }
                     else
                     {
                        CommonUI.setEnabled(_map.controlLevel["btnMc"],false,true);
                     }
                  }
               }
               else
               {
                  _map.controlLevel["btnMc"].gotoAndStop(1);
                  _map.controlLevel["btnMc"].visible = false;
                  _map.controlLevel["barMc"].visible = false;
                  if((_loc4_ = SystemTimerManager.sysBJDate).hours < 12)
                  {
                     _loc5_ = new Date(_loc4_.fullYear,_loc4_.month,_loc4_.date,12,0,0,0);
                  }
                  else if(_loc4_.hours > 14 && _loc4_.hours < 19)
                  {
                     _loc5_ = new Date(_loc4_.fullYear,_loc4_.month,_loc4_.date,19,0,0,0);
                  }
                  else
                  {
                     _loc5_ = new Date(_loc4_.fullYear,_loc4_.month,_loc4_.date + 1,12,0,0,0);
                  }
                  _surplusTime = (_loc5_.time - _loc4_.time) / 1000;
               }
            });
         });
      }
      
      private function isOpenTime() : Boolean
      {
         if(this.ac1 == null)
         {
            this.ac1 = new ActivityControl(this.cron1);
         }
         if(this.ac2 == null)
         {
            this.ac2 = new ActivityControl(this.cron2);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(Boolean(this.ac1.isInActivityTime) || Boolean(this.ac2.isInActivityTime))
         {
            if(this.ac1.isInActivityTime)
            {
               this._curTimeIndex = 1;
            }
            else if(this.ac2.isInActivityTime)
            {
               this._curTimeIndex = 2;
            }
            return true;
         }
         return false;
      }
      
      private function onTimer() : void
      {
         ++this._startTime;
         if(this._startTime % 20 == 0)
         {
            this.update();
         }
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         KTool.showMapAllPlayerAndMonster(true);
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
         MainManager.selfVisible = true;
         super.destroy();
      }
   }
}
