package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetPhantomInDevilCityController
   {
      
      private static const TIME_STR:String = "0xff000010月16日-10月22日0xffffff";
      
      private static const timeContr:ActivityControl = new ActivityControl([new CronTimeVo("*","*","16-22","10","*","2015")]);
      
      private static var _map:BaseMapProcess;
      
      private static var _randResult:uint;
      
      private static var _wallIndex:uint;
      
      private static var _wallStatusArr:Array;
       
      
      public function PetPhantomInDevilCityController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         onActivityTime();
      }
      
      private static function initInside() : void
      {
         removeActivity();
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         _map.conLevel["act"].visible = false;
         _map.depthLevel["HaiDaoZaBing"].visible = true;
         _map.depthLevel["HaiDaoZaBing"].buttonMode = true;
         _map.depthLevel["HaiDaoZaBing"].addEventListener(MouseEvent.CLICK,onHaiDaoZaBingClick);
         SocketConnection.addCmdListener(CommandID.GET_PETPHANTOM_DEVILCITY_STATUS,startActivity);
         SocketConnection.send(CommandID.GET_PETPHANTOM_DEVILCITY_STATUS);
      }
      
      private static function initOutside() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         if(!BitBuffSetClass.getState(22434))
         {
            _map.conLevel["act"].visible = true;
            _map.depthLevel["HaiDaoZaBing"].visible = false;
            KTool.hideMapAllPlayerAndMonster();
            startTask();
         }
         else
         {
            _map.conLevel["act"].visible = false;
            _map.depthLevel["HaiDaoZaBing"].visible = true;
            _map.depthLevel["HaiDaoZaBing"].buttonMode = true;
            _map.depthLevel["HaiDaoZaBing"].addEventListener(MouseEvent.CLICK,onHaiDaoZaBingClick);
         }
      }
      
      private static function startTask() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         AnimateManager.playMcAnimate(_map.conLevel["act"],1,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["赛尔号探测到这里有精灵的呼救声，一定是你们又在实施什么阴谋！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.PIRATE_2,["不要含血喷人！我们是觉得这里风景不错，山清水秀，鸟语花香..."],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["act"],2,"mc",function():void
                  {
                     NpcDialog.show(NPC.SEER,["你们对精灵做了什么！身为赛尔机器人，我有义务捍卫精灵的安全，快把精灵放了！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.PIRATE_2,["说了不要含血喷人啦！凡事要讲求证据！谁说海盗就一定会干坏事儿的？精灵在哪里啊？我们怎么没看到？"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["act"],3,"mc",function():void
                           {
                              NpcDialog.show(NPC.SEER,["精灵？！！你们还有什么好说的！快放了它！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.PIRATE_2,["既然被你发现了，有本事就把0xff0000真正的那只精灵0xffffff找出来。这里可是魔鬼城，没文化的铁皮机器人。"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(_map.conLevel["act"],4,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.PIRATE_2,["没关系，没关系，让它知道我们的秘密武器又怎样？想要救走精灵艾派，必须要打败我们才行！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.PIRATE_2,["看你求被海扁的诚心可嘉，" + TIME_STR + "，来这里救你的精灵朋友吧！不然，它就要被我们献给艾里克大人了，啊哈哈！！"],["我一定会打败你们的！"],[function():void
                                          {
                                             BitBuffSetClass.setState(22434,1,function():void
                                             {
                                                SocketConnection.send(1022,86050032);
                                                KTool.showMapAllPlayerAndMonster();
                                                _map.conLevel["act"].visible = false;
                                                _map.depthLevel["HaiDaoZaBing"].visible = true;
                                                _map.depthLevel["HaiDaoZaBing"].buttonMode = true;
                                                _map.depthLevel["HaiDaoZaBing"].addEventListener(MouseEvent.CLICK,onHaiDaoZaBingClick);
                                                SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
                                             });
                                          }]);
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function startActivity(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _wallStatusArr = KTool.readDataByBits(_loc2_,32);
         _randResult = _loc2_.readUnsignedInt();
         onRandReceived();
      }
      
      private static function onRandReceived() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < 5)
         {
            if(!_wallStatusArr[_loc1_])
            {
               _map.conLevel["wall_" + _loc1_].gotoAndStop(1);
               _map.conLevel["wall_" + _loc1_].buttonMode = true;
               _map.conLevel["wall_" + _loc1_].addEventListener(MouseEvent.CLICK,onWallClick);
            }
            else
            {
               _map.conLevel["wall_" + _loc1_].gotoAndStop(4);
               _map.conLevel["wall_" + _loc1_].buttonMode = false;
               _map.conLevel["wall_" + _loc1_].removeEventListener(MouseEvent.CLICK,onWallClick);
            }
            _loc1_++;
         }
      }
      
      private static function removeActivity() : void
      {
         _map.conLevel["act"].visible = false;
         _map.depthLevel["HaiDaoZaBing"].visible = false;
         _map.depthLevel["HaiDaoZaBing"].removeEventListener(MouseEvent.CLICK,onHaiDaoZaBingClick);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         var _loc1_:uint = 0;
         while(_loc1_ < 5)
         {
            _map.conLevel["wall_" + _loc1_].gotoAndStop(1);
            _loc1_++;
         }
      }
      
      private static function onWallClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         _wallIndex = uint((e.currentTarget as MovieClip).name.slice(5));
         _map.conLevel["wall_" + _wallIndex].buttonMode = false;
         _map.conLevel["wall_" + _wallIndex].removeEventListener(MouseEvent.CLICK,onWallClick);
         if(_wallIndex == _randResult - 1)
         {
            SocketConnection.send(1022,86050035);
            AnimateManager.playMcAnimate(_map.conLevel["wall_" + _wallIndex],2,"mc",function():void
            {
               _map.conLevel["wall_" + _wallIndex].gotoAndStop(4);
               _wallStatusArr[_wallIndex] = 1;
               beginFight();
            });
         }
         else
         {
            AnimateManager.playMcAnimate(_map.conLevel["wall_" + _wallIndex],3,"mc",function():void
            {
               _map.conLevel["wall_" + _wallIndex].gotoAndStop(4);
               _wallStatusArr[_wallIndex] = 1;
               beginDialog();
            });
         }
      }
      
      private static function beginFight() : void
      {
         NpcDialog.show(NPC.PIRATE_2,["这样就被你找到了？看来我们小瞧你了。有本事就从伟大的海盗手中把精灵救走。"],["我现在就把你们打得落花流水！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
            FightManager.fightWithBoss("海盗杂兵",0);
         }]);
      }
      
      private static function beginDialog() : void
      {
         NpcDialog.show(NPC.PIRATE_2,["哈哈，我们简直太聪明啦，竟然能想出这么高明的点子。"],["别得意，我一定会找出真正的精灵的！"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.REFRESH_PETPHANTOM_DEVILCITY_WALLSTATUS,onWallStatusRefreshResponse);
            SocketConnection.send(CommandID.REFRESH_PETPHANTOM_DEVILCITY_WALLSTATUS,_wallIndex + 1);
         }]);
      }
      
      private static function onWallStatusRefreshResponse(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.REFRESH_PETPHANTOM_DEVILCITY_WALLSTATUS,onWallStatusRefreshResponse);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         onActivityTime();
      }
      
      private static function onFinishFight(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         _map.conLevel["act"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["act"],5,"mc",function():void
         {
            NpcDialog.show(NPC.PIRATE_2,["哇哈哈！真是天助我也！就是说嘛，想从占据天时地利人和的伟大海盗手里救走艾派，哪有那么容易嘛！"],["可恶！我不会放弃的！（继续点击城墙，解救艾派）"],[function():void
            {
               _map.conLevel["act"].visible = false;
               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
               onActivityTime();
            }]);
         });
      }
      
      private static function onHaiDaoZaBingClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86050036);
         NpcDialog.show(NPC.PIRATE_2,[TIME_STR + "，从城墙中找出0xff0000真正的艾派0xffffff，然后0xff0000打败我们0xffffff！不过我们是不可战胜的，你不会成功的，啊哈哈！！"],["我一定会打败你们的！"],[function():void
         {
         }]);
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         if(isActive)
         {
            initInside();
         }
         else
         {
            initOutside();
         }
      }
      
      public static function get isActive() : Boolean
      {
         return timeContr.isInActivityTime;
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         SocketConnection.removeCmdListener(CommandID.GET_PETPHANTOM_DEVILCITY_STATUS,startActivity);
         SocketConnection.removeCmdListener(CommandID.REFRESH_PETPHANTOM_DEVILCITY_WALLSTATUS,onWallStatusRefreshResponse);
         if(Boolean(_map) && Boolean(_map.depthLevel["HaiDaoZaBing"]))
         {
            _map.depthLevel["HaiDaoZaBing"].removeEventListener(MouseEvent.CLICK,onHaiDaoZaBingClick);
         }
         var _loc1_:uint = 0;
         while(_loc1_ < 5)
         {
            _map.conLevel["wall_" + _loc1_].removeEventListener(MouseEvent.CLICK,onWallClick);
            _loc1_++;
         }
         _map = null;
      }
   }
}
