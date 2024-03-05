package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task949
   {
      
      private static var _mcForMap11:MovieClip;
      
      private static const TASK_ID:uint = 949;
      
      private static var _map:BaseMapProcess;
      
      private static var _num:uint;
       
      
      public function Task949()
      {
         super();
      }
      
      public static function initTaskForMap11(param1:BaseMapProcess) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         _map = param1;
         _mcForMap11 = _map.conLevel["task_949"];
         _mcForMap11.visible = false;
         var _loc2_:uint = 0;
         while(_loc2_ < 3)
         {
            _map.conLevel["leaf_" + _loc2_].visible = false;
            _loc2_++;
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_mcForMap11);
            _loc3_ = 0;
            while(_loc3_ < 3)
            {
               DisplayUtil.removeForParent(_map.conLevel["leaf_" + _loc3_]);
               _loc3_++;
            }
         }
         else
         {
            if(MainManager.actorInfo.petMaxLev > 35)
            {
               _mcForMap11.visible = true;
            }
            _loc4_ = 0;
            while(_loc4_ < 3)
            {
               _map.conLevel["leaf_" + _loc4_].visible = true;
               _loc4_++;
            }
            gotoStep();
         }
      }
      
      private static function gotoStep() : void
      {
         _mcForMap11.buttonMode = true;
         _mcForMap11.addEventListener(MouseEvent.CLICK,onJClick);
      }
      
      private static function onJClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         _mcForMap11.removeEventListener(MouseEvent.CLICK,onJClick);
         AnimateManager.playMcAnimate(_mcForMap11,1,"task_949_mc1",function():void
         {
            NpcDialog.show(NPC.XIAODOUYA,["哎哟..哎哟..就不能让我好好休息嘛！真讨厌，想让我出来陪你玩，除非你能抓到我！"],["哈哈，这个不难！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap11,2,"task_949_mc2",function():void
               {
                  initLeaf();
               });
            }]);
         });
      }
      
      private static function initLeaf() : void
      {
         _num = Math.floor(Math.random() * 3);
         var _loc1_:uint = 0;
         while(_loc1_ < 3)
         {
            _map.conLevel["leaf_" + _loc1_].buttonMode = true;
            _map.conLevel["leaf_" + _loc1_].addEventListener(MouseEvent.CLICK,onLeafClick);
            _loc1_++;
         }
      }
      
      private static function onLeafClick(param1:MouseEvent) : void
      {
         var i:uint = 0;
         var event:MouseEvent = param1;
         var s:String = String(event.currentTarget.name);
         i = uint(int(s.split("_")[1]));
         _map.conLevel["leaf_" + i].buttonMode = false;
         _map.conLevel["leaf_" + i].removeEventListener(MouseEvent.CLICK,onLeafClick);
         AnimateManager.playMcAnimate(_map.conLevel["leaf_" + i],2,"mc",function():void
         {
            if(i == _num)
            {
               AnimateManager.playMcAnimate(_mcForMap11,3 + _num,"task_949_mc3",function():void
               {
                  NpcDialog.show(NPC.XIAODOUYA,["不要高兴的太早哦！想抓我，你必须要有足够的实力，让我们来切磋一下吧！(*^__^*) 嘻嘻……"],["没问题！我很乐意接受你的挑战！"],[function():void
                  {
                     onFight();
                  }]);
               });
            }
         });
      }
      
      private static function onFight(param1:Event = null) : void
      {
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("小豆芽",0);
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _mcForMap11.buttonMode = true;
         _mcForMap11.addEventListener(MouseEvent.CLICK,onFight);
      }
      
      private static function onCatchPet(param1:PetFightEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         NpcDialog.show(NPC.SEER,["耶！太棒了，拥有了小豆芽，如果再拥有布布花的话就能去博士那里融合黄金布布咯！我太聪明啦！"],null,null,false);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         NpcDialog.show(NPC.XIAODOUYA,["嘿嘿，你抓不到我...抓不到哦！好好回去锻炼锻炼吧！咱们有缘再见吧！"],["呜呜呜...下次我一定要抓到你！"]);
      }
      
      public static function destroy() : void
      {
         var _loc1_:uint = 0;
         if(_map)
         {
            _loc1_ = 0;
            while(_loc1_ < 3)
            {
               if(_map.conLevel["leaf_" + _loc1_])
               {
                  _map.conLevel["leaf_" + _loc1_].removeEventListener(MouseEvent.CLICK,onLeafClick);
               }
               _loc1_++;
            }
            if(_mcForMap11)
            {
               _mcForMap11.removeEventListener(MouseEvent.CLICK,onJClick);
               _mcForMap11.removeEventListener(MouseEvent.CLICK,onFight);
            }
         }
         _mcForMap11 = null;
         _map = null;
      }
   }
}
