package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task625;
   import com.robot.app.task.taskscollection.Task659;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_442 extends BaseMapProcess
   {
      
      public static var isFromShip:Boolean;
      
      private static var _map:BaseMapProcess;
       
      
      public function MapProcess_442()
      {
         super();
      }
      
      override protected function init() : void
      {
         _map = this;
         Task625.initTask_442(this);
         Task659.initTask_442(this);
         if(isFromShip)
         {
            isFromShip = false;
            conLevel["monster"].visible = true;
            this.sptPre();
         }
         else
         {
            conLevel["monster"].visible = false;
         }
      }
      
      private function onMonsterClick(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("巨型章鱼",5);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
      }
      
      private function sptPre() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["monster"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["果然有异常，这家伙一看就不是什么好料，看我不好好教训他！"],["怪物，不准你再胡作非为！"],[function():void
            {
               NpcDialog.show(NPC.JUXINGZHANGYU,["哈哈哈…怪物？你居然敢在这样的环境下对我如此无礼，看来你是想一直在这里陪我了！"],["没错，我就是来击败你的！"],[function():void
               {
                  NpcDialog.show(NPC.JUXINGZHANGYU,["哼哼…你如此大胆，你妈妈知道吗？看来是该教训你的时候了！"],["可恶的家伙！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["monster"],2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.SEER,["什么！！！这家伙居然变的如此巨大，看来又是一番恶战了！"],["接招吧！巨型章鱼！","让我先准备一下！"],[function():void
                        {
                           FightManager.fightWithBoss("巨型章鱼",5);
                           FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                        },function():void
                        {
                           _map.conLevel["monster"].buttonMode = true;
                           _map.conLevel["monster"].gotoAndStop(3);
                           _map.conLevel["monster"].addEventListener(MouseEvent.CLICK,onMonsterClick);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
         info = e.dataObj as FightOverInfo;
         _map.conLevel["monster"].visible = true;
         _map.conLevel["monster"].gotoAndStop(3);
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.JUXINGZHANGYU,["我…我居然会败在你的手中，这不科学，在海底我才是最强的！"],["我看你还是省省吧！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["monster"],3,"mc3",function():void
               {
                  NpcDialog.show(NPC.SEER,["我警告你，不准你再在尼古尔星胡作非为，再让我知道，我就让你变成章鱼小丸子，听到没…"],["哼…下次我一定会战胜你的！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["看来你还是不死心，等我向苏克汇报好这里的情况再来教育你，你就等着吧！"],["立刻向苏克汇报！"],[function():void
                     {
                        MapProcess_57.fightWithSuc = true;
                        MapManager.changeMap(57);
                     }]);
                  }]);
               });
            }]);
         }
         else
         {
            NpcDialog.show(NPC.JUXINGZHANGYU,["哈哈，早就告诉你在这样的环境下，你是不可能战胜我的！"],["我就不信战胜不了你，再来！","让我再准备一下！"],[function():void
            {
               FightManager.fightWithBoss("巨型章鱼",5);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            },function():void
            {
               _map.conLevel["monster"].addEventListener(MouseEvent.CLICK,onMonsterClick);
            }]);
         }
      }
      
      override public function destroy() : void
      {
         Task625.destory();
         Task659.destory();
      }
   }
}
