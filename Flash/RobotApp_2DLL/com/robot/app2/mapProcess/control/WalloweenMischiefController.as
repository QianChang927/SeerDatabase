package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MathUtil;
   
   public class WalloweenMischiefController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _index:int = 0;
      
      private static var _npcIndex:int = 0;
      
      private static var ogre:MovieClip;
       
      
      public function WalloweenMischiefController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         KTool.getMultiValue([13538],function(param1:Array):void
         {
            var num:Number = NaN;
            var values:Array = param1;
            if(values[0] < 20)
            {
               num = Math.random();
               if(num < 0.2)
               {
                  getBoss();
                  ResourceManager.getResource(ClientConfig.getMapAnimate("walloween_sprite_" + _index),function(param1:MovieClip):void
                  {
                     _npcIndex = _index;
                     _map.btnLevel.addChild(param1);
                     ogre = param1;
                     param1.addEventListener(MouseEvent.CLICK,onClickHandler);
                     param1.x = getPos().x;
                     param1.y = getPos().y;
                     param1.buttonMode = true;
                     param1.scaleX = param1.scaleY = 0.7;
                  });
               }
            }
         });
      }
      
      protected static function onClickHandler(param1:Event) : void
      {
         var bossId:int = 0;
         var e:Event = param1;
         var npcs:Array = [2194,2210,2195,2257,2245,2258];
         var boss:Array = [2636,2637,2638,2639,2640,2641];
         var ogre:MovieClip = e.currentTarget as MovieClip;
         var Npc:int = int(npcs[_npcIndex]);
         bossId = int(boss[_index]);
         StatManager.sendStat2014("万圣节主题活动","南瓜捣蛋_和精灵对话",StatManager.RUN_ACT);
         NpcDialog.show(Npc,["万圣节到了，快给我0xffff001个万圣南瓜灯0xffffff，不然我就要开始捣蛋了哦。"],["好好好，给你","哪家的小孩，这么不乖，我来教训一下你"],[function():void
         {
            ItemManager.updateItems([1702587],function():void
            {
               var num:* = ItemManager.getNumByID(1702587);
               if(num > 0)
               {
                  KTool.doExchange(3908,function():void
                  {
                     removeBoss();
                  });
               }
               else
               {
                  Alert.show("万圣南瓜灯不足，是否要获得更多万圣南瓜灯？",function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("WalloweenMakeLightPanel"));
                  });
               }
            });
         },function():void
         {
            var onFight:Function = null;
            onFight = function(param1:*):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
               ModuleManager.showModule(ClientConfig.getAppModule("BlackObtainPanel"));
               if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  removeBoss();
               }
            };
            FightManager.fightNoMapBoss("",bossId);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         }]);
      }
      
      private static function removeBoss() : void
      {
         if(ogre)
         {
            ogre.removeEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
            DisplayUtil.removeForParent(ogre);
            ogre = null;
         }
      }
      
      private static function getBoss() : int
      {
         var _loc1_:Array = [2403,2446,2416,2433,2529,2511];
         _index = MathUtil.randomRegion(0,6);
         _index = _index == 6 ? 5 : _index;
         return _loc1_[_index];
      }
      
      private static function getPos() : Point
      {
         var _loc1_:Point = new Point();
         if(MapManager.currentMap.id == 1)
         {
            _loc1_.x = 690;
            _loc1_.y = 300;
         }
         else
         {
            _loc1_.x = 610;
            _loc1_.y = 330;
         }
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         removeBoss();
      }
   }
}
