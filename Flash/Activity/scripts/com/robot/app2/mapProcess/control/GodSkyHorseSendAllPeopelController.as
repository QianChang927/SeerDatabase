package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.OgreEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GodSkyHorseSendAllPeopelController
   {
      
      private static var _delay:int = 0;
      
      private static var _isOver:Boolean;
      
      private static var _objArr:Array;
      
      private static var _monsterArr:Array;
      
      private static var _map:BaseMapProcess;
      
      private static var _mapLocal:Array;
      
      private static var _local:String = "142,443|220,387|317,320|338,416|465,339|490,471|615,384|639,464|789,413";
       
      
      public function GodSkyHorseSendAllPeopelController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(_map)
         {
            _map = null;
         }
         if(_monsterArr)
         {
            _loc1_ = 0;
            while(_loc1_ < _monsterArr.length)
            {
               _monsterArr[_loc1_].destroy();
               _monsterArr[_loc1_].removeEventListener(OgreEvent.CLICK_OGRE,onClickOgre);
               _loc1_++;
            }
            _monsterArr.splice(0,_monsterArr.length);
            _monsterArr = null;
         }
         if(_objArr)
         {
            _loc1_ = 0;
            while(_loc1_ < _objArr.length)
            {
               _objArr[_loc1_].removeEventListener(MouseEvent.CLICK,onClick);
               DisplayUtil.removeForParent(_objArr[_loc1_]);
               _loc1_++;
            }
            _objArr.splice(0,_objArr.length);
            _objArr = null;
         }
         if(_mapLocal)
         {
            _mapLocal.splice(0,_mapLocal.length);
            _mapLocal = null;
         }
         SystemTimerManager.removeTickFun(delayUp);
      }
      
      private static function getLocal() : void
      {
         var _loc3_:Array = null;
         if(_mapLocal)
         {
            return;
         }
         _mapLocal = _local.split("|");
         var _loc1_:int = int(_mapLocal.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = _mapLocal[_loc2_].split(",");
            _mapLocal[_loc2_] = {
               "p":new Point(_loc3_[0],_loc3_[1]),
               "i":false
            };
            _loc2_++;
         }
      }
      
      private static function refresh() : void
      {
         KTool.getMultiValue([16448],function(param1:Array):void
         {
            _isOver = 20 - param1[0] == 0;
            addMonster();
         });
      }
      
      private static function addMonster() : void
      {
         var _loc1_:OgreModel = null;
         var _loc2_:Point = null;
         if(_monsterArr == null)
         {
            _monsterArr = new Array();
         }
         if(_monsterArr.length == 3)
         {
            return;
         }
         var _loc3_:int = 0;
         while(_monsterArr.length < 3)
         {
            _loc2_ = new Point();
            _loc2_.x = Math.random() * 556 + 217;
            _loc2_.y = Math.random() * 136 + 343;
            _loc1_ = new OgreModel(_loc3_);
            _loc1_.show(1066,_loc2_);
            _loc1_.addEventListener(RobotEvent.OGRE_CLICK,onClickOgre);
            _monsterArr.push(_loc1_);
            _loc3_++;
         }
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
      }
      
      protected static function onClickOgre(param1:RobotEvent) : void
      {
         var event:RobotEvent = param1;
         FightManager.fightNoMapBoss("卡瑞",6285,false,true,function():void
         {
            if(FightManager.isWin)
            {
               (event.currentTarget as OgreModel).destroy();
               event.currentTarget.removeEventListener(OgreEvent.CLICK_OGRE,onClickOgre);
            }
         });
      }
      
      private static function addObj() : void
      {
         var i:int;
         var p:Point = null;
         var s:int = 0;
         var j:int = 0;
         if(_objArr)
         {
            j = 0;
            while(j < _objArr.length)
            {
               if(!_objArr[j].visible)
               {
                  do
                  {
                     s = Math.floor(Math.random() * 9);
                  }
                  while(_mapLocal[s].i);
                  
                  p = _mapLocal[s].p;
                  _mapLocal[s].i = true;
                  _objArr[j].x = p.x;
                  _objArr[j].y = p.y;
                  _objArr[j].visible = true;
                  _objArr[j].name = s + "";
               }
               j++;
            }
            return;
         }
         _objArr = new Array();
         i = 0;
         while(i < 5)
         {
            ResourceManager.getResource(ClientConfig.getAppRes("mapobj/GodSkyHorseWish_MapObj"),function(param1:MovieClip):void
            {
               _objArr.push(param1);
               param1.addEventListener(MouseEvent.CLICK,onClick);
               do
               {
                  s = Math.floor(Math.random() * 9);
               }
               while(_mapLocal[s].i);
               
               p = _mapLocal[s].p;
               _mapLocal[s].i = true;
               param1.x = p.x;
               param1.y = p.y;
               param1.mouseChildren = false;
               param1.buttonMode = true;
               param1.name = s + "";
               MapManager.currentMap.depthLevel.addChild(param1);
            });
            i++;
         }
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
      }
      
      private static function delayUp() : void
      {
         --_delay;
         if(_delay <= 0)
         {
            addObj();
            SystemTimerManager.removeTickFun(delayUp);
         }
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(_isOver)
         {
            Alarm.show("运气值已经为0，明日再来哦~");
            return;
         }
         event.target.visible = false;
         _mapLocal[int(event.target.name)].i = false;
         SocketConnection.sendByQueue(42220,[1,0],function(param1:SocketEvent):void
         {
            refresh();
            _delay = 6;
            SystemTimerManager.addTickFun(delayUp);
         });
      }
   }
}
