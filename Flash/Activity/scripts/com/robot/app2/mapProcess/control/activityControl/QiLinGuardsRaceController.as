package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   
   public class QiLinGuardsRaceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMc:MovieClip;
       
      
      public function QiLinGuardsRaceController()
      {
         super();
      }
      
      public static function check() : void
      {
         SocketConnection.addCmdListener(CommandID.DRAGON_SCORE_LIMIT,onScoreLimit);
      }
      
      private static function onScoreLimit(param1:Event) : void
      {
         Alarm.show("您的麒麟守卫争夺赛个人积分已经达到上限！");
      }
      
      private static function get isJoin() : Boolean
      {
         return MainManager.actorInfo.dragonStatus > 0;
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         SocketConnection.send(1022,86056303);
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_980_2"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            taskMc.gotoAndStop(1);
            if(!BufferRecordManager.getMyState(1091))
            {
               doPre();
            }
            else
            {
               taskMc.gotoAndStop(taskMc.totalFrames);
               MapListenerManager.add(taskMc["qilin"],onClickNpc,"麒麟");
               MapListenerManager.add(taskMc["jiliguala"],onClickNpc,"叽里呱啦");
               MapListenerManager.add(taskMc["wuliwala"],onClickNpc,"唔哩哇啦");
            }
         });
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         MapListenerManager.add(_map.conLevel["qilinzhishu"],onClickQiLinZhiShu,"麒麟挑战指数");
         MapListenerManager.add(_map.conLevel["ad2"],onClickVoteBtn,"麒麟六芒阵");
         MapListenerManager.add(_map.conLevel["rank"],onClickRank,"麒麟守卫争夺赛排行榜");
         MapListenerManager.add(_map.conLevel["bonus"],function():void
         {
            SocketConnection.send(1022,86069796);
            ModuleManager.showModule(ClientConfig.getAppModule("QilinGuardBonusPanel"),"正在载入...");
         },"麒麟守卫争夺赛最终奖励");
         MapListenerManager.add(_map.conLevel["mojun"],function():void
         {
            SocketConnection.send(1022,86070045);
            ModuleManager.showModule(ClientConfig.getAppModule("QiLinGuardDefenseMojunPanel"));
         },"魔君的侵袭");
      }
      
      private static function doPre() : void
      {
         _map.conLevel["mojun"].visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140321_7"),function():void
         {
            SocketConnection.send(1022,86070043);
            NpcDialog.show(NPC.JILIGUALA,["本届麒麟守卫争夺战即将闭幕了！我们守卫队可以所向披靡，一往无前哦！怕了吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.WULIGULA,["怕？怎么可能！我们先锋队才是战无不胜攻无不克。这届争夺赛的优秀队一定是我们了！"],["你…"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMc,1,"mc1",function():void
                  {
                     NpcDialog.show(NPC.JILIGUALA,["可恶，又是差一点点！"],["别难过，叽里呱啦！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["麒麟守卫队在本次争夺赛中，表现也十分出色！大家再接再厉，记住，我们是最棒的！"],["恩恩，赛尔是最棒的！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["但是我们不能松懈！泰坦星系的谜团还没有解开，先锋队成员还身处困境！我们必须加紧训练！"],["我们该怎么办？"],[function():void
                           {
                              NpcDialog.show(NPC.SHIPER,["勇者太空站即将开始！勇敢的赛尔，快去参加吧！接下来，就是见证你们真正实力的时刻了！"],["恩恩！我们会的！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMc,2,"mc2",function():void
                                 {
                                    NpcDialog.show(NPC.WULIGULA,["是六芒麒麟阵！我一定会成功开启六星图腾的！快让大家一起来参加！"],["恩恩，我这就去告诉其他赛尔！"],[function():void
                                    {
                                       SocketConnection.send(1022,86070044);
                                       BufferRecordManager.setMyState(1091,true);
                                       _map.conLevel["mojun"].visible = true;
                                       taskMc.gotoAndStop(taskMc.totalFrames);
                                       MapListenerManager.add(taskMc["qilin"],onClickNpc,"麒麟");
                                       MapListenerManager.add(taskMc["jiliguala"],onClickNpc,"叽里呱啦");
                                       MapListenerManager.add(taskMc["wuliwala"],onClickNpc,"唔哩哇啦");
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               }]);
            });
         });
      }
      
      private static function onClickNpc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(e.currentTarget.name == "qilin")
         {
            NpcDialog.show(NPC.ARUISI,[MainManager.actorInfo.formatNick + "，想要战胜我，成为最有实力的赛尔吗？让我们较量一番吧！如果你的实力足够强大，可是会有很好的奖励哦！"],["我准备好了！来吧！","我还没准备好！等我一会！"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
               {
                  var e:PetFightEvent = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  NpcDialog.show(NPC.ARUISI,["不错不错，后生可畏啊！" + MainManager.actorInfo.formatNick + "你实力非凡，值得受到我的尊敬。快去领取一份你应得的奖励吧！"],["谢谢阿瑞斯大人的夸奖！"],[function():void
                  {
                     CommonUI.addYellowArrow(_map.topLevel,263,165,30);
                  }]);
               });
               SocketConnection.send(1022,86069476);
               FightManager.fightNoMapBoss("阿瑞斯",841);
            }]);
         }
         else if(e.currentTarget.name == "jiliguala")
         {
            NpcDialog.show(NPC.JILIGUALA,["下次我们守卫队一定可以所向披靡，一往无前哦！"],["领取大赛奖杯、奖牌"],[function():void
            {
               if(TasksManager.getTaskStatus(1790) != TasksManager.COMPLETE)
               {
                  SocketConnection.send(CommandID.GET_DRAGONGUARD_REWARD,4);
               }
               else
               {
                  Alarm.show("你已经领取过了！");
               }
            }]);
         }
         else if(e.currentTarget.name == "wuliwala")
         {
            NpcDialog.show(NPC.WULIGULA,["我们先锋队是冠军的哦！不过我们要继续加油，争取更大的胜利！"],["领取大赛奖杯、奖牌"],[function():void
            {
               if(TasksManager.getTaskStatus(1790) != TasksManager.COMPLETE)
               {
                  SocketConnection.send(CommandID.GET_DRAGONGUARD_REWARD,4);
               }
               else
               {
                  Alarm.show("你已经领取过了！");
               }
            }]);
         }
      }
      
      private static function onClickRank(param1:Event) : void
      {
         SocketConnection.send(1022,86069801);
         ModuleManager.showModule(ClientConfig.getAppModule("QilinGuardRankPanel"),"正在载入...");
      }
      
      private static function onClickVoteBtn(param1:MouseEvent) : void
      {
         MapManager.changeMap(802);
      }
      
      private static function onClickQiLinZhiShu(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86069800);
         CommonUI.removeYellowArrow(_map.topLevel);
         ModuleManager.showModule(ClientConfig.getAppModule("QiLinZhiShuPanel"));
      }
      
      private static function onEnter(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(_map.conLevel["qilinhunpo"].x,_map.conLevel["qilinhunpo"].y)) < 20)
         {
            NpcDialog.show(NPC.ARUISI,[MainManager.actorInfo.formatNick + "，接下来你即将进入麒麟空间接受六道轮回的考验！只有收集六种印章才是真正的强者！是否立即前往麒麟空间？ "],["是的！我实力足够强大！","我还没准备好！"],[function():void
            {
               MapManager.changeMap(73);
            }]);
         }
      }
      
      public static function destroy() : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
         _map = null;
      }
   }
}
