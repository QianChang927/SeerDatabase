package com.robot.app2.mapProcess
{
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
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11906 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      private var _surplusNum:int;
      
      private var _itemNum:int;
      
      private var _curClickIndex:int;
      
      private var _curBossIndex:int;
      
      private var _eventtypeArr:Array;
      
      public function MapProcess_11906()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.topLevel.mouseChildren = false;
         this._map.topLevel.mouseEnabled = false;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      protected function onBossClick(param1:MouseEvent) : void
      {
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
               if(MainManager.actorInfo.mapID == 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     MapManager.changeMapWithCallback(2,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("DawnRabbitOutputStep1Panel"),"正在打开....");
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DawnRabbitOutputStep1Panel"),"正在打开....");
                  });
               }
               break;
            case "btn":
               this._curClickIndex = index1;
               if(Point.distance(MainManager.actorModel.pos,new Point(this._map.controlLevel["mc_" + this._curClickIndex].x,this._map.controlLevel["mc_" + this._curClickIndex].y)) < 40)
               {
                  this.onEnter0(null);
               }
               else
               {
                  MainManager.actorModel.walkAction(new Point(this._map.controlLevel["mc_" + index1].x,this._map.controlLevel["mc_" + index1].y));
                  MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
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
         }
      }
      
      private function onEnter0(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(this._map.controlLevel["mc_" + this._curClickIndex].x,this._map.controlLevel["mc_" + this._curClickIndex].y)) < 80)
         {
            this._map.controlLevel.mouseChildren = false;
            this._map.controlLevel.mouseEnabled = false;
            this._map.controlLevel["mc_" + this._curClickIndex].bar.visible = true;
            AnimateManager.playMcAnimate(this._map.controlLevel["mc_" + this._curClickIndex],1,"bar",function():void
            {
               _map.controlLevel["mc_" + _curClickIndex].bar.visible = false;
               if(_eventtypeArr[_curClickIndex] != 2)
               {
                  KTool.socketSendCallBack(43326,function():void
                  {
                     after();
                  },[29,_curClickIndex + 3]);
               }
               else if(_eventtypeArr[_curClickIndex] == 2)
               {
                  _map.controlLevel.mouseChildren = true;
                  _map.controlLevel.mouseEnabled = true;
                  Alert.show("出现精灵抢夺，进入战斗，战胜可以获得月华之灵*2，失败则无法获得月华之灵,确定进入？",function():void
                  {
                     KTool.socketSendCallBack(43326,function():void
                     {
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                     },[29,13 + _curClickIndex]);
                  });
               }
               else
               {
                  _map.controlLevel.mouseChildren = true;
                  _map.controlLevel.mouseEnabled = true;
               }
            },false,true);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         }
      }
      
      private function after() : void
      {
         this.update();
         this._map.controlLevel.mouseChildren = true;
         this._map.controlLevel.mouseEnabled = true;
         KTool.getMultiValue([10953,10954],function(param1:Array):void
         {
            var value:int = 0;
            var va:Array = param1;
            value = _curClickIndex < 8 ? int(va[0]) : int(va[1]);
            var eventType:uint = uint(KTool.subByte(value,_curClickIndex < 8 ? uint(_curClickIndex * 4) : uint((_curClickIndex - 8) * 4),4));
            if(eventType == 2)
            {
               Alert.show("出现精灵抢夺，进入战斗，战胜可以获得月华之灵*2，失败则无法获得月华之灵,确定进入？",function():void
               {
                  KTool.socketSendCallBack(43326,function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                  },[29,13 + _curClickIndex]);
               });
            }
         });
      }
      
      private function onFightOver(param1:*) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
      }
      
      protected function update() : void
      {
         this._eventtypeArr = new Array();
         KTool.getMultiValue([10951,10953,10954],function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc4_:uint = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 10)
            {
               _map.controlLevel["mc_" + _loc2_].bar.visible = false;
               if(BitUtils.getBit(param1[0],_loc2_ + 12) > 0)
               {
                  _map.controlLevel["mc_" + _loc2_].visible = true;
               }
               else
               {
                  _map.controlLevel["mc_" + _loc2_].visible = false;
               }
               _loc3_ = _loc2_ < 8 ? int(param1[1]) : int(param1[2]);
               _loc4_ = uint(KTool.subByte(_loc3_,_loc2_ < 8 ? uint(_loc2_ * 4) : uint((_loc2_ - 8) * 4),4));
               _eventtypeArr.push(_loc4_);
               _loc2_++;
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         super.destroy();
      }
   }
}
