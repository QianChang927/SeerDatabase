package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.Event;
   import flash.geom.Point;
   
   public class MengYouYiActionController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function MengYouYiActionController()
      {
         super();
      }
      
      public static function initMap353(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Point = new Point(343,312);
         var _loc3_:OgreModel = new OgreModel(0);
         _loc3_.scaleX = _loc3_.scaleY = 1.5;
         _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickAppleHandler);
         _loc3_.show(682,_loc2_);
      }
      
      protected static function onClickAppleHandler(param1:Event) : void
      {
         var event:Event = param1;
         var ogre:OgreModel = event.currentTarget as OgreModel;
         NpcDialog.show(NPC.PINGGUO_DUODUO,["苹果！苹果！上好的苹果咯！"],["给我一个苹果吧"],[function():void
         {
            NpcDialog.show(NPC.PINGGUO_DUODUO,["没有问题，如果你能击败我，我心情好的话说不定就会送你一个苹果哦！注意：我并不是必定会给你苹果的哦！"],["好，那我们就来较量较量！"],[function():void
            {
               var onFight:Function = null;
               onFight = function(param1:*):void
               {
                  var e:* = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
                  if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
                  {
                     KTool.getBitSet([19331],function(param1:Array):void
                     {
                        if(param1[0] <= 0)
                        {
                           Alarm2.show("很遗憾，你并没有获得苹果！再挑战试试吧！");
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show("很遗憾，你并没有获得苹果！再挑战试试吧！");
                  }
               };
               var bid:* = 4776;
               var bname:* = "苹果多多";
               FightManager.fightNoMapBoss(bname,bid);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            }]);
         }]);
      }
      
      public static function initMap352(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Point = new Point(500,437);
         var _loc3_:OgreModel = new OgreModel(0);
         _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickHoneyPeachHandler);
         _loc3_.show(680,_loc2_);
      }
      
      protected static function onClickHoneyPeachHandler(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.MITAODUODUO,["蜜桃！蜜桃！上好的蜜桃咯！"],["给我一个蜜桃吧！"],[function():void
         {
            NpcDialog.show(NPC.MITAODUODUO,["没有问题，如果你能击败我，我心情好的话说不定就会送你一个蜜桃哦！注意：我并不是必定会给你蜜桃的哦！"],["好，那我们就来较量较量！"],[function():void
            {
               var onFight:Function = null;
               onFight = function(param1:*):void
               {
                  var e:* = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
                  if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
                  {
                     KTool.getBitSet([19331],function(param1:Array):void
                     {
                        if(param1[0] <= 0)
                        {
                           Alarm2.show("很遗憾，你并没有获得蜜桃！再挑战试试吧！");
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show("很遗憾，你并没有获得蜜桃！再挑战试试吧！");
                  }
               };
               var bid:* = 4777;
               var bname:* = "蜜桃多多";
               FightManager.fightNoMapBoss(bname,bid);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            }]);
         }]);
      }
      
      public static function initMap350(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Point = new Point(337,281);
         var _loc3_:OgreModel = new OgreModel(0);
         _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickStrawberryHandler);
         _loc3_.show(677,_loc2_);
      }
      
      protected static function onClickStrawberryHandler(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.CAOMEIDUODUO,["草莓！草莓！上好的草莓咯"],["给我一个草莓吧！"],[function():void
         {
            NpcDialog.show(NPC.CAOMEIDUODUO,["没有问题，如果你能击败我，我心情好的话说不定就会送你一个草莓哦！注意：我并不是必定会给你草莓的哦！"],["好，那我们就来较量较量！"],[function():void
            {
               var onFight:Function = null;
               onFight = function(param1:*):void
               {
                  var e:* = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
                  if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
                  {
                     KTool.getBitSet([19331],function(param1:Array):void
                     {
                        if(param1[0] <= 0)
                        {
                           Alarm2.show("很遗憾，你并没有获得草莓！再挑战试试吧！");
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show("很遗憾，你并没有获得草莓！再挑战试试吧！");
                  }
               };
               var bid:* = 4778;
               var bname:* = "草莓多多";
               FightManager.fightNoMapBoss(bname,bid);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            }]);
         }]);
      }
      
      public static function initMap354(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Point = new Point(333,198);
         var _loc3_:OgreModel = new OgreModel(0);
         _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickMelonHandler);
         _loc3_.show(686,_loc2_);
      }
      
      protected static function onClickMelonHandler(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.MIGUA_DUODUO,["蜜瓜！蜜瓜！上好的蜜瓜咯！"],["给我一个蜜瓜吧"],[function():void
         {
            NpcDialog.show(NPC.MIGUA_DUODUO,["没有问题，如果你能击败我，我心情好的话说不定就会送你一个蜜瓜哦！注意：我并不是必定会给你蜜瓜的哦！"],["好，那我们就来较量较量！"],[function():void
            {
               var onFight:Function = null;
               onFight = function(param1:*):void
               {
                  var e:* = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
                  if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
                  {
                     KTool.getBitSet([19331],function(param1:Array):void
                     {
                        if(param1[0] <= 0)
                        {
                           Alarm2.show("很遗憾，你并没有获得蜜瓜！再挑战试试吧！");
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show("很遗憾，你并没有获得蜜瓜！再挑战试试吧！");
                  }
               };
               var bid:* = 4779;
               var bname:* = "蜜瓜多多";
               FightManager.fightNoMapBoss(bname,bid);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            }]);
         }]);
      }
      
      public static function initMap351(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Point = new Point(400,300);
         var _loc3_:OgreModel = new OgreModel(0);
         _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickGrapeHandler);
         _loc3_.show(684,_loc2_);
      }
      
      protected static function onClickGrapeHandler(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.PUTAODUODUO,["葡萄！葡萄！上好的葡萄咯！"],["给我一个葡萄吧！"],[function():void
         {
            NpcDialog.show(NPC.PUTAODUODUO,["没有问题，如果你能击败我，我心情好的话说不定就会送你一个葡萄哦！注意：我并不是必定会给你葡萄的哦！"],["好，那我们就来较量较量！"],[function():void
            {
               var onFight:Function = null;
               onFight = function(param1:*):void
               {
                  var e:* = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
                  if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
                  {
                     KTool.getBitSet([19331],function(param1:Array):void
                     {
                        if(param1[0] <= 0)
                        {
                           Alarm2.show("很遗憾，你并没有获得葡萄！再挑战试试吧！");
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show("很遗憾，你并没有获得葡萄！再挑战试试吧！");
                  }
               };
               var bid:* = 4780;
               var bname:* = "葡萄多多";
               FightManager.fightNoMapBoss(bname,bid);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
