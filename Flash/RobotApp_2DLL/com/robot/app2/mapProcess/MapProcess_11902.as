package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11902 extends BaseMapProcess
   {
       
      
      private var _step:int;
      
      public var _map:MapModel;
      
      private var _isfightAllBoss:Boolean = false;
      
      private var _posArr:Array;
      
      private var _curIndex:int = 0;
      
      private var _itemNum:int;
      
      public function MapProcess_11902()
      {
         this._posArr = [new Point(352,231),new Point(502,231),new Point(622,335),new Point(465,339),new Point(232,209),new Point(884,129)];
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         StatManager.sendStat2014("0831重见天日的伙伴","进入炫彩山场景","2018运营活动");
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
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
               Alert.show("你确定要提前结束本次探索吗？",function():void
               {
                  KTool.socketSendCallBack(43326,function():void
                  {
                     if(MainManager.actorInfo.mapID == 1)
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           MapManager.changeMapWithCallback(2,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("EntrustmentOfRebirthWingMainPanel"),"正在打开....");
                           });
                        });
                     }
                     else
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("EntrustmentOfRebirthWingMainPanel"),"正在打开....");
                        });
                     }
                  },[4,6]);
               });
               break;
            case "btn_" + index:
               if(index == 0 && this._step == 4)
               {
                  this._curIndex = 4;
                  MainManager.actorModel.walkAction(this._posArr[4]);
               }
               else
               {
                  this._curIndex = index;
                  MainManager.actorModel.walkAction(this._posArr[index]);
               }
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
               break;
            case "updateBtn":
               if(this._isfightAllBoss)
               {
                  MainManager.actorModel.walkAction(this._posArr[5]);
                  MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnterPass);
               }
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
            case "npcBtn":
         }
      }
      
      private function onEnter0(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,this._posArr[this._curIndex]) < 20)
         {
            if(this._curIndex == 0)
            {
               NpcDialog.show(981,["你能救救我吗？"],["我这就放你出来！"],[function():void
               {
                  palyMc();
               }],false,null,true);
            }
            else if(this._curIndex == 3)
            {
               KTool.socketSendCallBack(43326,function():void
               {
                  KTool.getMultiValue([105294],function(param1:Array):void
                  {
                     var _loc2_:int = int(KTool.subByte(param1[0],0,16));
                     Alarm2.show("这里居然有" + (_loc2_ - _itemNum) + "点散落的光之元气，太幸运了！");
                     update();
                  });
               },[4,this._curIndex + 1]);
            }
            else
            {
               KTool.socketSendCallBack(43326,function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               },[4,this._curIndex + 1]);
            }
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         }
      }
      
      private function onEnterPass(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,this._posArr[5]) < 20)
         {
            KTool.socketSendCallBack(43326,function():void
            {
               if(MainManager.actorInfo.mapID == 1)
               {
                  MapManager.changeMapWithCallback(2,function():void
                  {
                     MapManager.changeMap(11902);
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     MapManager.changeMap(11902);
                  });
               }
            },[4,5]);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnterPass);
         }
      }
      
      private function palyMc() : void
      {
         if(this._isfightAllBoss)
         {
            CommonUI.setEnabled(this._map.controlLevel,false,false);
            AnimateManager.playMcAnimate(this._map.controlLevel["mc"]["npcMc"],2,"playMc",function():void
            {
               CommonUI.setEnabled(_map.controlLevel,true,false);
               _map.controlLevel["mc"]["npcMc"].visible = false;
               KTool.socketSendCallBack(43326,function():void
               {
                  Alarm2.show("成功解救了文杰尔，获得了2个光之元气！");
                  update();
               },[4,1]);
            },false,true);
         }
         else
         {
            NpcDialog.show(981,["这里有很多敌人，先将它们全部消灭吧！"],["我明白了！"],[function():void
            {
            }],false,null,true);
         }
      }
      
      private function onFightOver(param1:*) : void
      {
         var e:* = param1;
         if(FightManager.isWin)
         {
            KTool.getPlayerInfo([1209],function(param1:Array):void
            {
               var _loc2_:int = int(KTool.subByte(param1[0],0,4));
               if(_loc2_ == 5)
               {
                  Alarm2.show("恭喜你获得了5点光之元气！");
               }
               else
               {
                  Alarm2.show("恭喜你获得了2点光之元气！");
               }
            });
         }
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
      }
      
      public function update() : void
      {
         KTool.getMultiValue([105294],function(param1:Array):void
         {
            _itemNum = KTool.subByte(param1[0],0,16);
         });
         KTool.getPlayerInfo([1209],function(param1:Array):void
         {
            var fightNum:int;
            var i:int = 0;
            var index:uint = 0;
            var va:Array = param1;
            _step = KTool.subByte(va[0],0,4);
            _map.controlLevel["numTx"].text = (_step + 1 > 5 ? 5 : _step + 1) + "/5";
            fightNum = 0;
            if(_step >= 4)
            {
               _map.controlLevel["mc"].gotoAndStop(2);
               if(_map.controlLevel["mc"]["btn_1"] != null)
               {
                  if(BitUtils.getBit(va[0],29) > 0)
                  {
                     _map.controlLevel["mc"]["btn_1"].visible = false;
                     _map.controlLevel["mc"]["bossTips"].visible = false;
                  }
                  else
                  {
                     _map.controlLevel["mc"]["btn_1"].visible = true;
                     _map.controlLevel["mc"]["bossTips"].visible = true;
                  }
               }
               if(_map.controlLevel["updateBtn"] != null)
               {
                  _map.controlLevel["updateBtn"].visible = false;
               }
               if(_step == 5)
               {
                  Alarm2.show("恭喜你，完成了本次探索，并获得了1次开启宝箱的机会！");
                  if(MainManager.actorInfo.mapID == 1)
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        MapManager.changeMapWithCallback(2,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("EntrustmentOfRebirthWingMainPanel"),"正在打开....");
                        });
                     });
                  }
                  else
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("EntrustmentOfRebirthWingMainPanel"),"正在打开....");
                     });
                  }
               }
            }
            else
            {
               _map.controlLevel["mc"].gotoAndStop(1);
               i = 0;
               while(i < 4)
               {
                  index = uint(KTool.subByte(va[0],i * 4 + 4,4));
                  if(i == 0 || i == 3)
                  {
                     if(i == 0)
                     {
                        _map.controlLevel["mc"]["npcMc"].visible = index > 0 ? true : false;
                        if(_map.controlLevel["mc"]["npcMc"].currentFrame == 1)
                        {
                           _map.controlLevel["mc"]["npcMc"].mc1.mouseEnabled = false;
                           _map.controlLevel["mc"]["npcMc"].mc1.mouseChildren = false;
                        }
                     }
                     else
                     {
                        _map.controlLevel["mc"]["btn_" + i].visible = index > 0 ? true : false;
                     }
                  }
                  else
                  {
                     _map.controlLevel["mc"]["bossMc_" + i].gotoAndStop(index);
                     _map.controlLevel["mc"]["bossMc_" + i].visible = true;
                  }
                  if(BitUtils.getBit(va[0],i + 28) > 0)
                  {
                     if(i == 0 || i == 3)
                     {
                        if(i == 0)
                        {
                           _map.controlLevel["mc"]["npcMc"].visible = false;
                        }
                        else
                        {
                           _map.controlLevel["mc"]["btn_" + i].visible = false;
                        }
                     }
                     else
                     {
                        fightNum++;
                        _map.controlLevel["mc"]["bossMc_" + i].visible = false;
                     }
                  }
                  i++;
               }
               _isfightAllBoss = fightNum >= 2 ? true : false;
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnterPass);
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
