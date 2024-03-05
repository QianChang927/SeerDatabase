package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SearchRareMonsterController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
      
      private static var btnLevel:DisplayObjectContainer;
      
      private static var _monsterIds:Array = [1768,1364,1697,966,667,203,775,941,1344,1509,746];
      
      private static var _bossIds:Array = [2865,2866,2867,2868,2869,2870,2871,2872,2873,2874,2875];
      
      private static var _bossNames:Array = ["嘉古","燕捕头","铁牙","哈罗威","普顿","晶岩兽","粉粉","维克","小咕","小超灵","基鲁"];
      
      private static var _powerGoodX:Array = [150,370,500,750];
      
      private static var _powerGoodY:Array = [300,420,80,250];
      
      private static var _powerGoodWidth:uint;
      
      private static var _powerGoodHeight:uint;
      
      private static var _getPowerGoodsNum:uint = 0;
      
      private static var _fightBossSeq:uint = 0;
      
      private static var _specialType:uint = 0;
      
      private static var _preMapId:uint;
       
      
      public function SearchRareMonsterController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         btnLevel = param1.btnLevel;
         onMapChangeHandler();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChangeHandler1);
      }
      
      private static function onMapChangeHandler1(param1:MapEvent) : void
      {
         var _loc2_:uint = uint(MapManager.currentMap.id);
         if(_loc2_ == 10775)
         {
            LevelManager.iconLevel.visible = false;
            LevelManager.toolsLevel.visible = false;
         }
         else
         {
            LevelManager.iconLevel.visible = true;
            LevelManager.toolsLevel.visible = true;
         }
      }
      
      private static function onMapChangeHandler() : void
      {
         var i:uint = 0;
         var curMapId:uint = uint(MapManager.currentMap.id);
         if(curMapId == 10775)
         {
            i = 0;
            while(i < 11)
            {
               btnLevel["flag_" + i].visible = false;
               i++;
            }
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoPetCanFightHandler);
            btnLevel["buyJiaoNangBtn"].addEventListener(MouseEvent.CLICK,onBuyJiaoNangBtnHandler);
            btnLevel["catchRareBookBtn"].addEventListener(MouseEvent.CLICK,onCatchRareBookBtnHandler);
            btnLevel["exitBtn"].addEventListener(MouseEvent.CLICK,onExitBtnHandler);
            KTool.getMultiValue([6159,6158],function(param1:Array):void
            {
               var val1:uint = 0;
               var bitVal:uint = 0;
               var arr:Array = param1;
               var val:uint = uint(arr[0]);
               val1 = uint(arr[1]);
               var trueLength:uint = 0;
               var i:uint = 1;
               while(i <= 11)
               {
                  bitVal = uint(KTool.getBit(val,i));
                  if(bitVal > 0)
                  {
                     if(i >= 3)
                     {
                        trueLength++;
                     }
                     btnLevel["flag_" + (i - 1)].visible = true;
                  }
                  i++;
               }
               if(trueLength == 8)
               {
                  btnLevel["mcState"].gotoAndStop(2);
               }
               else
               {
                  btnLevel["mcState"].gotoAndStop(1);
               }
               ResourceManager.getResource(ClientConfig.getResPath("mapAnimate/map_10775_0.swf"),function(param1:DisplayObject):void
               {
                  var o:DisplayObject = param1;
                  var mc:MovieClip = o as MovieClip;
                  _mc = mc;
                  var i:uint = 0;
                  while(i < 4)
                  {
                     _mc["animate_" + i].visible = false;
                     i++;
                  }
                  _mc.txtAnimate.visible = false;
                  if(val1 > 0)
                  {
                     if(val1 == 1 || val1 == 2 || val1 == 3)
                     {
                        _mc.animate_3.visible = true;
                        _mc.txtAnimate.visible = true;
                        _mc.animate_3.x = 500;
                        _mc.animate_3.y = 250;
                        _mc.animate_3.gotoAndPlay(2);
                        _mc.txtAnimate.gotoAndPlay(2);
                        _mc.animate_3.addFrameScript(_mc.animate_3.totalFrames - 1,function():void
                        {
                           _mc.animate_3.stop();
                           _mc.animate_3.ballBtn_1.buttonMode = true;
                           _mc.animate_3.ballBtn_1.addEventListener(MouseEvent.CLICK,onBallBtnHandler);
                        });
                        _mc.txtAnimate.addFrameScript(_mc.txtAnimate.totalFrames - 1,function():void
                        {
                           _mc.txtAnimate.stop();
                           _mc.txtAnimate.visible = false;
                        });
                     }
                     else
                     {
                        _mc.animate_2.visible = true;
                        _mc.animate_2.x = 500;
                        _mc.animate_2.y = 250;
                        _mc.animate_2.gotoAndPlay(2);
                        _mc.animate_2.addFrameScript(_mc.animate_2.totalFrames - 1,function():void
                        {
                           _mc.animate_2.stop();
                           _mc.animate_2.ballBtn_0.buttonMode = true;
                           _mc.animate_2.ballBtn_0.addEventListener(MouseEvent.CLICK,onBallBtnHandler);
                        });
                     }
                  }
                  else
                  {
                     _mc.animate_0.visible = true;
                     _mc.animate_0.x = 500;
                     _mc.animate_0.y = 250;
                     _mc.animate_0.gotoAndPlay(2);
                     _mc.animate_0.buttonMode = true;
                     _mc.animate_0.addEventListener(MouseEvent.CLICK,onAnimateHandler);
                  }
                  LevelManager.mapLevel.addChild(_mc);
               },"item");
            });
         }
      }
      
      private static function onNoPetCanFightHandler(param1:RobotEvent) : void
      {
         MapManager.changeMap(1050);
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
      }
      
      private static function onExitBtnHandler(param1:MouseEvent) : void
      {
         MapManager.changeMap(1050);
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
      }
      
      private static function onAnimateHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var curMC:MovieClip = event.currentTarget as MovieClip;
         var name:String = curMC.name;
         var index:uint = uint(name.split("_")[1]);
         if(index == 0)
         {
            curMC.visible = false;
            _mc["animate_1"].x = 500;
            _mc["animate_1"].y = 250;
            _mc["animate_1"].visible = true;
            _mc["animate_1"].gotoAndPlay(2);
            _mc["animate_1"].addFrameScript(_mc["animate_1"].totalFrames - 1,function():void
            {
               _mc["animate_1"].stop();
               _mc["animate_0"].visible = false;
               loadPowerGood();
            });
         }
         else if(index == 1)
         {
         }
      }
      
      private static function loadPowerGood() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("module/active/keluoyipowergood.swf"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            mc.buttonMode = true;
            LevelManager.mapLevel.addChild(mc);
            mc.x = _powerGoodX[0];
            mc.y = _powerGoodY[0];
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               ++_getPowerGoodsNum;
               randomMonster();
               DisplayUtil.removeForParent(mc);
               mc = null;
            });
         },"keluoyipowergood");
         ResourceManager.getResource(ClientConfig.getResPath("module/active/keluoyipowergood.swf"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            mc.buttonMode = true;
            LevelManager.mapLevel.addChild(mc);
            mc.x = _powerGoodX[1];
            mc.y = _powerGoodY[1];
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               ++_getPowerGoodsNum;
               randomMonster();
               DisplayUtil.removeForParent(mc);
               mc = null;
            });
         },"keluoyipowergood");
         ResourceManager.getResource(ClientConfig.getResPath("module/active/keluoyipowergood.swf"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            mc.buttonMode = true;
            LevelManager.mapLevel.addChild(mc);
            mc.x = _powerGoodX[2];
            mc.y = _powerGoodY[2];
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               ++_getPowerGoodsNum;
               randomMonster();
               DisplayUtil.removeForParent(mc);
               mc = null;
            });
         },"keluoyipowergood");
         ResourceManager.getResource(ClientConfig.getResPath("module/active/keluoyipowergood.swf"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            mc.buttonMode = true;
            LevelManager.mapLevel.addChild(mc);
            mc.x = _powerGoodX[3];
            mc.y = _powerGoodY[3];
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               ++_getPowerGoodsNum;
               randomMonster();
               DisplayUtil.removeForParent(mc);
               mc = null;
            });
         },"keluoyipowergood");
      }
      
      private static function randomMonster() : void
      {
         Alarm.show("你已收集" + _getPowerGoodsNum + "/4个神谕能量");
         if(_getPowerGoodsNum == 4)
         {
            SocketConnection.sendByQueue(42121,[0],function(param1:SocketEvent):void
            {
               var monSeq:uint;
               var socket:SocketEvent = param1;
               var data:ByteArray = socket.data as ByteArray;
               data.position = 0;
               monSeq = data.readUnsignedInt();
               _mc.animate_1.visible = false;
               if(monSeq == 1 || monSeq == 2 || monSeq == 3)
               {
                  _mc.animate_3.visible = true;
                  _mc.txtAnimate.visible = true;
                  _mc.animate_3.x = 500;
                  _mc.animate_3.y = 250;
                  _mc.animate_3.gotoAndPlay(2);
                  _mc.txtAnimate.gotoAndPlay(2);
                  _mc.animate_3.addFrameScript(_mc.animate_3.totalFrames - 1,function():void
                  {
                     _mc.animate_3.stop();
                     _mc.animate_3.ballBtn_1.buttonMode = true;
                     _mc.animate_3.ballBtn_1.addEventListener(MouseEvent.CLICK,onBallBtnHandler);
                  });
                  _mc.txtAnimate.addFrameScript(_mc.txtAnimate.totalFrames - 1,function():void
                  {
                     _mc.txtAnimate.stop();
                     _mc.txtAnimate.visible = false;
                  });
               }
               else
               {
                  _mc.animate_2.visible = true;
                  _mc.animate_2.x = 500;
                  _mc.animate_2.y = 250;
                  _mc.animate_2.gotoAndPlay(2);
                  _mc.animate_2.addFrameScript(_mc.animate_2.totalFrames - 1,function():void
                  {
                     _mc.animate_2.stop();
                     _mc.animate_2.ballBtn_0.buttonMode = true;
                     _mc.animate_2.ballBtn_0.addEventListener(MouseEvent.CLICK,onBallBtnHandler);
                  });
               }
            });
         }
      }
      
      private static function onBallBtnHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var name:String = String(event.currentTarget.name);
         var index:uint = uint(name.split("_")[1]);
         _specialType = index;
         if(index == 0)
         {
            _mc.animate_2.visible = false;
         }
         else if(index == 1)
         {
            _mc.animate_3.visible = false;
            _mc.txtAnimate.visible = false;
         }
         KTool.getMultiValue([6158],function(param1:Array):void
         {
            var _loc2_:uint = uint(param1[0]);
            FightManager.fightNoMapBoss("",_bossIds[_loc2_ - 1]);
         });
      }
      
      private static function onFightCatchSuccessHandler(param1:PetFightEvent) : void
      {
      }
      
      private static function initValue() : void
      {
         _getPowerGoodsNum = 0;
      }
      
      private static function onBuyJiaoNangBtnHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SearchRareMonsterXiaoPanel"),"正在打开...",1);
      }
      
      private static function onCatchRareBookBtnHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SearchRareMonsterXiaoPanel"),"正在打开...",2);
      }
      
      public static function destroy() : void
      {
         initValue();
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoPetCanFightHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChangeHandler1);
         btnLevel["buyJiaoNangBtn"].removeEventListener(MouseEvent.CLICK,onBuyJiaoNangBtnHandler);
         btnLevel["catchRareBookBtn"].removeEventListener(MouseEvent.CLICK,onCatchRareBookBtnHandler);
         btnLevel["exitBtn"].removeEventListener(MouseEvent.CLICK,onExitBtnHandler);
         if(Boolean(_mc.animate_2) && Boolean(_mc.animate_2.ballBtn_0))
         {
            _mc.animate_2.ballBtn_0.removeEventListener(MouseEvent.CLICK,onBallBtnHandler);
         }
         if(Boolean(_mc.animate_3) && Boolean(_mc.animate_3.ballBtn_1))
         {
            _mc.animate_3.ballBtn_1.removeEventListener(MouseEvent.CLICK,onBallBtnHandler);
         }
         _mc.removeEventListener(MouseEvent.CLICK,onAnimateHandler);
      }
   }
}
