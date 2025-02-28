package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11740 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      protected var _step:int;
      
      private var _surplusTime:int;
      
      private var _ctachNumArr:Array;
      
      private var _curNum:int;
      
      private var _maxNumArr:Array;
      
      protected var _isDone:Boolean;
      
      public function MapProcess_11740()
      {
         this._maxNumArr = [3,5,3];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         StatManager.sendStat2014("1019丰收节庆典","进入麦田守夜场景","2018运营活动");
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
               });
               break;
            case "npcBtn":
               if(this._isDone)
               {
                  NpcDialog.show(3095,["谢谢你的帮助，勇士！你的表现很出色！"],["不客气！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                  }],false,null,true);
               }
               if(this._step == 0)
               {
                  NpcDialog.show(3095,["这两天麦田丰收，小偷猖獗，可给我累坏了。勇士，今晚你愿意帮我看守麦田吗？我真的需要休息一下……"],["我愿意！","让我考虑一下。"],[function():void
                  {
                     showTipsMc(1);
                  }],false,null,true);
               }
               else if(this._step == 4)
               {
               }
               break;
            case "okBtn":
               this.hideTipsMc();
               if(this._step == 0)
               {
                  KTool.playSceneAnimation("map_HarvestFestivalCelebration",1,function():void
                  {
                     KTool.socketSendCallBack(43304,function():void
                     {
                        update();
                        StatManager.sendStat2014("1019丰收节庆典","开始守夜第1波进攻","2018运营活动");
                     },[7,1]);
                  },0,true,false);
               }
               else if(this._step < 4)
               {
                  if(this._step == 2)
                  {
                     StatManager.sendStat2014("1019丰收节庆典","开始守夜第2波进攻","2018运营活动");
                  }
                  else if(this._step == 3)
                  {
                     StatManager.sendStat2014("1019丰收节庆典","开始守夜第3波进攻","2018运营活动");
                  }
                  KTool.socketSendCallBack(43304,function():void
                  {
                     update();
                  },[8,0]);
               }
               else if(this._step == 4)
               {
                  KTool.socketSendCallBack(43304,function():void
                  {
                     update();
                  },[7,2]);
               }
               break;
            case "boss1":
               FightManager.fightNoMapBoss("",14378 + index1,false,true,function():void
               {
               });
               break;
            case "boss2":
               FightManager.fightNoMapBoss("",14381 + index1,false,true,function():void
               {
               });
               break;
            case "boss3":
               FightManager.fightNoMapBoss("",14386 + index1,false,true,function():void
               {
               });
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
               break;
            case "closeBtn":
               if(MapManager.currentMap.id != 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(2,function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                     });
                  });
               }
         }
      }
      
      protected function showTipsMc(param1:int) : void
      {
         this._map.controlLevel["tipsMc"].mc.gotoAndStop(param1);
         this._map.controlLevel["tipsMc"].visible = true;
         KTool.hideMapAllPlayerAndMonster();
      }
      
      protected function hideTipsMc() : void
      {
         this._map.controlLevel["tipsMc"].visible = false;
         KTool.showMapAllPlayerAndMonster();
      }
      
      protected function update() : void
      {
         this.hideTipsMc();
         this._map.controlLevel["zhezhaoMc"].mouseChildren = false;
         this._map.controlLevel["zhezhaoMc"].mouseEnabled = false;
         this._map.controlLevel["sighMc"].visible = false;
         this._map.controlLevel["npcBtn"].visible = false;
         this.hideAllBoss();
         KTool.getMultiValue([104602,104603,104604,16989],function(param1:Array):void
         {
            var passTime:int;
            var i:int = 0;
            var i3:int = 0;
            var i4:int = 0;
            var va:Array = param1;
            _step = va[1];
            _curNum = 0;
            _ctachNumArr = new Array();
            _map.controlLevel["showInfoMc"].numTx.text = String(_step >= 4 ? 3 : _step) + "/3";
            jiSuanCtachNum(va);
            if(_step >= 1 && _step < 3)
            {
               if(Boolean(FightManager.isWin) && _ctachNumArr[_step - 1] >= _maxNumArr[_step - 1])
               {
                  showTipsMc(2);
               }
            }
            if(_step == 0)
            {
               _map.controlLevel["zhezhaoMc"].visible = false;
               _map.controlLevel["sighMc"].visible = true;
               _map.controlLevel["showInfoMc"].visible = false;
               _map.controlLevel["npcBtn"].visible = true;
            }
            else if(_step == 1)
            {
               _map.controlLevel["showInfoMc"].visible = true;
               _map.controlLevel["zhezhaoMc"].visible = true;
               i = 0;
               while(i < 3)
               {
                  if(BitUtils.getBit(va[0],i) > 0)
                  {
                     ++_curNum;
                     _map.controlLevel["boss1Mc_" + i].visible = false;
                  }
                  else
                  {
                     _map.controlLevel["boss1Mc_" + i].visible = true;
                  }
                  i++;
               }
               _map.controlLevel["showInfoMc"].num2Tx.text = 0 + "/2";
            }
            else if(_step == 2)
            {
               _map.controlLevel["showInfoMc"].visible = true;
               _map.controlLevel["zhezhaoMc"].visible = true;
               i3 = 0;
               while(i3 < 5)
               {
                  if(BitUtils.getBit(va[0],i3 + 3) > 0)
                  {
                     ++_curNum;
                     _map.controlLevel["boss2Mc_" + i3].visible = false;
                  }
                  else
                  {
                     _map.controlLevel["boss2Mc_" + i3].visible = true;
                  }
                  i3++;
               }
               _map.controlLevel["showInfoMc"].num2Tx.text = 3 - _ctachNumArr[0] + "/2";
            }
            else if(_step == 3)
            {
               _map.controlLevel["showInfoMc"].visible = true;
               _map.controlLevel["zhezhaoMc"].visible = true;
               i4 = 0;
               while(i4 < 3)
               {
                  if(BitUtils.getBit(va[0],i4 + 8) > 0)
                  {
                     ++_curNum;
                     _map.controlLevel["boss3Mc_" + i4].visible = false;
                  }
                  else
                  {
                     _map.controlLevel["boss3Mc_" + i4].visible = true;
                  }
                  i4++;
               }
               _map.controlLevel["showInfoMc"].num2Tx.text = 3 - _ctachNumArr[0] + 5 - _ctachNumArr[1] + "/2";
               if(_ctachNumArr[0] + _ctachNumArr[1] + _ctachNumArr[2] >= 9 && _ctachNumArr[2] >= 3)
               {
                  _map.controlLevel["zhezhaoMc"].visible = false;
                  KTool.socketSendCallBack(43304,function():void
                  {
                     update();
                  },[8,0]);
               }
            }
            else if(_step == 4)
            {
               _map.controlLevel["showInfoMc"].visible = true;
               _map.controlLevel["zhezhaoMc"].visible = true;
               _map.controlLevel["sighMc"].visible = false;
               showTipsMc(5);
               hideAllBoss();
            }
            else if(_step == 5)
            {
               _map.controlLevel["showInfoMc"].visible = true;
               _map.controlLevel["zhezhaoMc"].visible = true;
               _map.controlLevel["sighMc"].visible = false;
               hideAllBoss();
               _map.controlLevel["npcBtn"].visible = true;
            }
            passTime = SystemTimerManager.time - va[2];
            _surplusTime = 2 * 60 - passTime;
            if(_surplusTime > 0)
            {
               SystemTimerManager.addTickFun(onTimer);
            }
            else
            {
               SystemTimerManager.removeTickFun(onTimer);
               if(va[2] > 0)
               {
                  showAlert();
               }
               getTimeClockString(0);
            }
            _isDone = BitUtils.getBit(va[3],0) > 0 ? true : false;
            if(_isDone)
            {
               _map.controlLevel["sighMc"].visible = false;
               ToolBarController.showOrHideAllUser(true);
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
            }
         });
      }
      
      private function jiSuanCtachNum(param1:Array) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            if(BitUtils.getBit(param1[0],_loc3_) > 0)
            {
               _loc2_++;
            }
            _loc3_++;
         }
         this._ctachNumArr[0] = _loc2_;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         while(_loc5_ < 5)
         {
            if(BitUtils.getBit(param1[0],_loc5_ + 3) > 0)
            {
               _loc4_++;
            }
            _loc5_++;
         }
         this._ctachNumArr[1] = _loc4_;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         while(_loc7_ < 5)
         {
            if(BitUtils.getBit(param1[0],_loc7_ + 8) > 0)
            {
               _loc6_++;
            }
            _loc7_++;
         }
         this._ctachNumArr[2] = _loc6_;
      }
      
      private function hideAllBoss() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            this._map.controlLevel["boss1Mc_" + _loc1_].visible = false;
            _loc1_++;
         }
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            this._map.controlLevel["boss2Mc_" + _loc2_].visible = false;
            _loc2_++;
         }
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            this._map.controlLevel["boss3Mc_" + _loc3_].visible = false;
            _loc3_++;
         }
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.update();
         }
         else
         {
            this.getTimeClockString(this._surplusTime);
         }
      }
      
      private function showAlert() : void
      {
         var frame:int = 0;
         var leijilouzhua:int = 0;
         var i:int = 0;
         while(i < this._step)
         {
            leijilouzhua += this._maxNumArr[i] - this._ctachNumArr[i];
            i++;
         }
         if(this._ctachNumArr[this._step - 1] == this._maxNumArr[this._step - 1])
         {
            if(this._step < 3)
            {
               frame = 2;
            }
            else
            {
               frame = 5;
            }
         }
         else if(leijilouzhua > 2)
         {
            frame = 4;
         }
         else if(this._step < 3)
         {
            this._map.controlLevel["tipsMc"].mc.gotoAndStop(3);
            frame = 3;
            this._map.controlLevel["tipsMc"].mc.numTx.text = leijilouzhua + "/2";
         }
         else
         {
            frame = 5;
         }
         this._map.controlLevel["showInfoMc"].num2Tx.text = leijilouzhua + "/2";
         if(this._step == 3 && this._ctachNumArr[0] + this._ctachNumArr[1] + this._ctachNumArr[2] >= 9)
         {
            KTool.socketSendCallBack(43304,function():void
            {
               update();
            },[8,0]);
            return;
         }
         this.showTipsMc(frame);
      }
      
      private function getTimeClockString(param1:int) : void
      {
         this._map.controlLevel["showInfoMc"].timeTx.text = SystemTimerManager.getTimeClockString(param1,false);
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
