package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class SmallMantisForAllPeopleToSendController
   {
      
      private static var _map:MapModel;
      
      private static var _cureIndex:int;
      
      private static var _taskMc:MovieClip;
      
      private static var _getNum:int;
      
      private static var _curIndex:int;
      
      private static var _timer:Timer;
      
      private static var _exploitPorBar:MovieClip;
       
      
      private const BUFFERID:uint = 0;
      
      public function SmallMantisForAllPeopleToSendController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         initView();
      }
      
      private static function initView() : void
      {
         var _loc1_:int = 0;
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         if(_map.id == 11612)
         {
            CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["npc1"].x + 200,_map.controlLevel["npc1"].y - 50,45);
         }
         if(_map.id == 11613)
         {
            _map.controlLevel["mc"].visible = false;
            CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["npc2"].x + 200,_map.controlLevel["npc2"].y - 50,45);
         }
         if(_map.id == 11614)
         {
            CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["npc3"].x + 200,_map.controlLevel["npc3"].y - 50,45);
         }
         else if(_map.id == 11615)
         {
            _loc1_ = 0;
            while(_loc1_ < 10)
            {
               _map.controlLevel["item_" + _loc1_].visible = false;
               _loc1_++;
            }
            if(BufferRecordManager.getMyState(1385))
            {
               _loc2_ = new Array();
               _loc3_ = 0;
               while(_loc3_ < 3)
               {
                  _loc4_ = int(Math.random() * 10);
                  _loc2_.push(_loc4_);
                  _loc3_++;
               }
               _map.controlLevel["item_" + _loc2_[0]].visible = true;
               _map.controlLevel["item_" + _loc2_[1]].visible = true;
               _map.controlLevel["item_" + _loc2_[2]].visible = true;
            }
            else
            {
               CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["npc4"].x + 200,_map.controlLevel["npc4"].y - 50,45);
            }
         }
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(KTool.getIndex(event.target));
         switch(event.target.name)
         {
            case "npc1":
               Dialog1();
               break;
            case "npc2":
               Dialog2();
               break;
            case "item2":
               collectItem();
               break;
            case "npc3":
               Dialog3();
               break;
            case "npc4":
               if(_getNum == 0)
               {
                  Dialog4();
               }
               else if(_getNum >= 10)
               {
                  SocketConnection.sendByQueue(43284,[12,4],function():void
                  {
                     Alarm2.show("恭喜你成功为青龙疗伤，青龙的伤势有所好转了！",function():void
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("SmallMantisForAllPeopleToSendMainPanel"),"正在打开....");
                        });
                     });
                  });
               }
               break;
            case "item_" + index:
               _curIndex = index;
               collectItem();
         }
      }
      
      private static function Dialog1() : void
      {
         NpcDialog.show(NPC.SHENGSUN_BAIHU,["上次那场大战虽然早已过去，但我仍然难以释怀•••"],["白虎大人•••"],[function():void
         {
            NpcDialog.show(NPC.SEER,["那次战斗也不全怪白虎大人，是飞镰他们太狡猾！"],["小家伙，你又来安慰我了吗？"],[function():void
            {
               NpcDialog.show(NPC.SHENGSUN_BAIHU,["是我太自负了，我的轻敌让神兽之血落入了大暗黑天之手，不知道他们会做出什么丧心病狂之事！"],["白虎大人，让我们远离尘世的喧嚣，一起共享这宇宙间的繁华吧！","白虎大人，一次的失败并不能说明什么•••"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["大暗黑天太过强大，我们不如避其锋芒，藏到宇宙的深处去！"],["胡说八道！"],[function():void
                  {
                     NpcDialog.show(NPC.SHENGSUN_BAIHU,["我身为宇宙的神兽，怎么能抛弃万物生灵？你如此短见，不配与我等为伍！"],["•••"],[function():void
                     {
                        Alarm2.show("你的话语激怒了白虎，再试试吧！");
                     }]);
                  }]);
               },function():void
               {
                  NpcDialog.show(NPC.SEER,["与黑暗的战斗却是永无止境的！我们一直都是毫无保留的战斗！甚至玄武大人已经•••相信下一次的决战时刻，胜利一定属于我们！"],["说得好！"],[function():void
                  {
                     NpcDialog.show(NPC.SHENGSUN_BAIHU,["唉，玄武也不知道是生是死•••不管怎样，他永远是我们神兽的榜样！那家伙，现在倒是轻松了•••我也该振作一些啦。"],["•••"],[function():void
                     {
                        Alarm2.show("恭喜你成功使白虎振作起来！",function():void
                        {
                           SocketConnection.sendByQueue(43284,[12,1],function():void
                           {
                              MapManager.changeMapWithCallback(1,function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("SmallMantisForAllPeopleToSendMainPanel"),"正在打开....");
                              });
                           });
                        });
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog2() : void
      {
         NpcDialog.show(NPC.XUANTIANSHENWU,["父亲大人，您现在究竟在哪里•••"],["玄武大人他•••！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["我相信玄武大人一定不会有事的！"],["是你啊•••"],[function():void
            {
               NpcDialog.show(NPC.XUANTIANSHENWU,["你又来为父亲大人祈福了吗，谢谢你。"],["这是我应该做的！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["玄武大人为了守护宇宙而下落不明，为玄武大人祈福是我的荣幸！"],["父亲大人是我们的荣耀！"],[function():void
                  {
                     NpcDialog.show(NPC.XUANTIANSHENWU,["谢谢你，请你点燃这烛台，为父亲大人祈福吧！"],["好的！"],[function():void
                     {
                        _map.controlLevel["mc"].visible = true;
                        CommonUI.removeYellowArrow(_map.controlLevel);
                        CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["mc"].x + 120,_map.controlLevel["mc"].y - 50,45);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog3() : void
      {
         NpcDialog.show(NPC.CHIHUNAGZHUQUE,["小赛尔，传火吗？"],["传不了，传不了•••","传传传，赞美火焰"],[function():void
         {
            NpcDialog.show(NPC.SEER,["这火我不传，谁爱传谁传"],["你说什么？"],[function():void
            {
               NpcDialog.show(NPC.CHIHUNAGZHUQUE,["看来你不是我的有缘人•••"],["•••"],[function():void
               {
                  Alarm2.show("只有传火才能完成任务，请选择传火！");
               }]);
            }]);
         },function():void
         {
            NpcDialog.show(NPC.SEER,["我传还不行吗•••"],["好！"],[function():void
            {
               NpcDialog.show(NPC.CHIHUNAGZHUQUE,["只要你能击败只出1分力的我，便有资格为我传火！"],["好！"],[function():void
               {
                  FightManager.fightNoMapBoss("炽羽炎凰·朱雀",12045,false,true,function():void
                  {
                     KTool.getBitSet([1000386],function(param1:Array):void
                     {
                        var va:Array = param1;
                        if(va[0] > 0)
                        {
                           Alarm2.show("恭喜你击败了只出1分力的朱雀，将为朱雀传火！",function():void
                           {
                              MapManager.changeMapWithCallback(1,function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("SmallMantisForAllPeopleToSendMainPanel"),"正在打开....");
                              });
                           });
                        }
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function Dialog4() : void
      {
         NpcDialog.show(NPC.TIANCANXUANHUN_QINGLONG,["年轻的小赛尔哟，你能帮我收集水源灵石助我疗伤吗？"],["青龙大人•••"],[function():void
         {
            NpcDialog.show(NPC.SEER,["您不要学河神•••我会去帮您收集灵石的！"],["拜托你了"],[function():void
            {
               NpcDialog.show(NPC.TIANCANXUANHUN_QINGLONG,["只需要收集10个水源灵石就够了，那时你再来找我吧！"],["••"],[function():void
               {
                  BufferRecordManager.setMyState(1385,true,function():void
                  {
                     var _loc3_:* = undefined;
                     CommonUI.removeYellowArrow(_map.controlLevel);
                     var _loc1_:* = new Array();
                     var _loc2_:* = 0;
                     while(_loc2_ < 3)
                     {
                        _loc3_ = int(Math.random() * 10);
                        _loc1_.push(_loc3_);
                        _loc2_++;
                     }
                     _map.controlLevel["item_" + _loc1_[0]].visible = true;
                     _map.controlLevel["item_" + _loc1_[1]].visible = true;
                     _map.controlLevel["item_" + _loc1_[2]].visible = true;
                  });
               }]);
            }]);
         }]);
      }
      
      private static function update() : void
      {
         var num:int = 0;
         var arr:Array = new Array();
         var i:int = 0;
         while(i < 1)
         {
            num = int(Math.random() * 10);
            arr.push(num);
            i++;
         }
         _map.controlLevel["item_" + arr[0]].visible = true;
         ItemManager.updateItems([1716114],function():void
         {
            var i:int = 0;
            var num:Array = new Array();
            num[0] = ItemManager.getNumByID(1716114);
            _getNum = num[0];
            if(_getNum >= 10)
            {
               Alarm2.show("已收集足够的水源灵石，可以为青龙疗伤了！",function():void
               {
                  CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["npc4"].x + 220,_map.controlLevel["npc4"].y - 50,45);
               });
               i = 0;
               while(i < 1)
               {
                  _map.controlLevel["item_" + i].visible = false;
                  i++;
               }
            }
         });
      }
      
      public static function destroy() : void
      {
         destroyMineAnima();
         CommonUI.removeYellowArrow(_map.controlLevel);
         _map.controlLevel.removeEventListener(MouseEvent.CLICK,onMainClick);
      }
      
      public static function collectItem() : void
      {
         if(!_exploitPorBar)
         {
            exploitNow();
         }
      }
      
      private static function exploitNow() : void
      {
         addProBar();
         _timer = new Timer(1000,3);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
         _timer.start();
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_START,onWalk);
         MainManager.actorModel.direction = Direction.DOWN;
      }
      
      private static function addProBar() : void
      {
         if(!_exploitPorBar)
         {
            _exploitPorBar = UIManager.getMovieClip("ExploitPorBarMC");
         }
         _exploitPorBar.y = -80;
         _exploitPorBar.gotoAndStop(1);
         MainManager.actorModel.addChild(_exploitPorBar);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         _exploitPorBar.gotoAndStop(param1.target.currentCount * 16);
      }
      
      private static function onTimeOver(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         destroyMineAnima();
         _exploitPorBar.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_exploitPorBar)
            {
               if(_exploitPorBar.currentFrame == _exploitPorBar.totalFrames)
               {
                  _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  DisplayUtil.removeForParent(_exploitPorBar);
                  _exploitPorBar = null;
               }
            }
         });
         _exploitPorBar.gotoAndPlay(51);
         if(MapManager.currentMap.id == 11613)
         {
            _map.controlLevel["mc"].gotoAndStop(2);
            setTimeout(function():void
            {
               Alarm2.show("恭喜你完成玄武祈福！",function():void
               {
                  SocketConnection.sendByQueue(43284,[12,2],function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("SmallMantisForAllPeopleToSendMainPanel"),"正在打开....");
                     });
                  });
               });
            },1000);
         }
         else
         {
            _map.controlLevel["item_" + _curIndex].visible = false;
            SocketConnection.sendByQueue(43284,[13,0],function():void
            {
               update();
            });
         }
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         destroyMineAnima();
         _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
         DisplayUtil.removeForParent(_exploitPorBar);
         _exploitPorBar = null;
      }
      
      private static function onWalk(param1:RobotEvent) : void
      {
         destroyMineAnima();
         _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
         DisplayUtil.removeForParent(_exploitPorBar);
         _exploitPorBar = null;
      }
      
      private static function destroyMineAnima() : void
      {
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
            _timer = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.stop();
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,onWalk);
      }
   }
}
