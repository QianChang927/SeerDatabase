package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.TacoLynController;
   import com.robot.app.task.control.TaskController_128;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.effect.Earthquake;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class MapProcess_48 extends BaseMapProcess
   {
       
      
      private var bossMC:MovieClip;
      
      private var leaderMC:MovieClip;
      
      private var closeArr:Array;
      
      private var seerCount:uint = 5;
      
      private var seerArr:Array;
      
      public function MapProcess_48()
      {
         this.closeArr = [115,121,120,116,95];
         super();
         SocketConnection.send(1022,86073322);
      }
      
      private function init128Task() : void
      {
         if(TasksManager.getTaskStatus(TaskController_128.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_128.TASK_ID,function(param1:Array):void
            {
               var arr:Array = param1;
               if(Boolean(arr[0]) && !arr[1])
               {
                  AnimateManager.playMcAnimate(bossMC,3,"mc_3",function():void
                  {
                  },true);
               }
               if(Boolean(arr[1]) && !arr[2])
               {
                  AnimateManager.playMcAnimate(bossMC,3,"mc_3",function():void
                  {
                  },true);
                  conLevel["boss_mc"].visible = false;
                  NpcDialog.show(NPC.TACOLIN,["就凭你一个赛尔完全不是我的对手！只有团结在一起的赛尔才有可能对我构成威胁！哈哈哈哈哈！"],["糟了！"],[function():void
                  {
                     creatSeer();
                  }]);
               }
               if(arr[2])
               {
                  conLevel["boss_mc"].visible = false;
                  leaderMC.visible = false;
                  bossMC.visible = false;
                  creatSeer(true);
               }
            });
         }
         else
         {
            this.bossMC.visible = false;
            conLevel["boss_mc"].visible = false;
         }
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86054306);
         this.bossMC = animatorLevel["boss_mc"];
         this.leaderMC = topLevel["leader_mc"];
         this.init128Task();
         topLevel["arrow"].visible = false;
         this.init128Task();
         depthLevel["machine"].visible = true;
         MapListenerManager.add(depthLevel["machine"],this.onClickMachine,"机械塔克林");
      }
      
      private function onClickMachine(param1:Event) : void
      {
         SocketConnection.send(1022,86050097);
         ModuleManager.showModule(ClientConfig.getAppModule("TacoLynRepair"),"正在打开...");
      }
      
      override public function destroy() : void
      {
         TacoLynController.destroy();
         this.leaderMC.removeEventListener(MouseEvent.CLICK,this.onLeaderClickHandler);
      }
      
      private function creatSeer(param1:Boolean = false) : void
      {
         var i:uint;
         var userInfo:UserInfo = null;
         var arr:Array = null;
         var j:uint = 0;
         var seer:BasePeoleModel = null;
         var itemInfo:PeopleItemInfo = null;
         var t:uint = 0;
         var b:Boolean = param1;
         this.seerArr = [];
         i = 0;
         while(i < this.seerCount)
         {
            userInfo = new UserInfo();
            userInfo.userID = i;
            arr = SuitXMLInfo.getCloths(this.closeArr[i]);
            j = 0;
            while(j < arr.length)
            {
               itemInfo = new PeopleItemInfo(arr[j]);
               userInfo.clothes.push(itemInfo);
               j++;
            }
            seer = new BasePeoleModel(userInfo);
            seer.x = 880;
            seer.y = 65;
            seer.speed += i * 2;
            seer.mouseChildren = false;
            seer.mouseEnabled = false;
            LevelManager.mapLevel.addChild(seer);
            if(b)
            {
               seer.x = 355 + i * 80;
               seer.y = 450;
            }
            else
            {
               seer.walkAction(new Point(355 + i * 80,450));
            }
            this.seerArr.push(seer);
            if(i == 2)
            {
               t = setTimeout(function():void
               {
                  clearTimeout(t);
                  var _loc1_:* = 0;
                  while(_loc1_ < seerArr.length)
                  {
                     seerArr[_loc1_].direction = Direction.UP;
                     _loc1_++;
                  }
                  leaderMC.buttonMode = true;
                  leaderMC.addEventListener(MouseEvent.CLICK,onLeaderClickHandler);
               },2000);
            }
            i++;
         }
      }
      
      private function onLeaderClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.LEADER,["别担心了，" + MainManager.actorInfo.formatNick + "，你不是一个人在战斗。我们一起的话一定可以打败塔克林的！"],["嗯！"],[function():void
         {
            NpcDialog.show(NPC.LEADER,["塔克林，我们来挑战你了！"],["组员们开始进攻！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("groupeffect"),function():void
               {
                  NpcDialog.show(NPC.TACOLIN,["#5哼！你们这些小不点还算厉害，不过下次可没那么幸运了！"],["我们还没问出他的来意呢！"],[function():void
                  {
                     AnimateManager.playMcAnimate(bossMC,4,"mc_4",function():void
                     {
                        NpcDialog.show(NPC.LEADER,["可惜让它跑了！" + MainManager.actorInfo.formatNick + "，你快去向船长报告情况吧，我们在这里再调查一下看看有没有什么线索。"],["好的，我这就回去复命！"],[function():void
                        {
                           TasksManager.complete(TaskController_128.TASK_ID,2,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 leaderMC.visible = false;
                              }
                           },true);
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private function onCloseFight(param1:PetFightEvent) : void
      {
         var fightData:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
         fightData = e.dataObj as FightOverInfo;
         if(fightData.winnerID != MainManager.actorID)
         {
            TasksManager.complete(TaskController_128.TASK_ID,1,function(param1:Boolean):void
            {
               if(param1)
               {
               }
            });
         }
      }
      
      public function onFightBoss() : void
      {
         if(this.bossMC.currentFrame == 3)
         {
            if(MapManager.currentMap.id == 48)
            {
               FightManager.fightWithBoss("机械化塔克林");
            }
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,this.onCloseFight);
            return;
         }
         AnimateManager.playMcAnimate(this.bossMC,2,"mc_2",function():void
         {
            NpcDialog.show(NPC.TACOLIN,["是谁这么大胆子打扰我做事！#5吼～～～～～～～～～～～～你一定要为此付出代价！"],["不好！居然是塔克林"],[function():void
            {
               NpcDialog.show(NPC.SEER,["塔克林怎么变成了这副样子！看起来很不容易对付，船长对我说过不能逞强的。"],["我还是先撤退吧！"],[function():void
               {
                  NpcDialog.show(NPC.TACOLIN,["好大的胆子，小不点你居然还想跑！？"],["不好！"],[function():void
                  {
                     TasksManager.complete(TaskController_128.TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           fightWithTaco();
                        }
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private function fightWithTaco() : void
      {
         LevelManager.closeMouseEvent();
         AnimateManager.playMcAnimate(this.bossMC,3,"mc_3",function():void
         {
            Earthquake.go(LevelManager.mapLevel,20,1,function():void
            {
               LevelManager.openMouseEvent();
               if(MapManager.currentMap.id == 48)
               {
                  FightManager.fightWithBoss("机械化塔克林");
               }
               FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onCloseFight);
            });
         });
      }
   }
}
