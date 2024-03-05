package com.robot.app.task.petstory
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class Task_890
   {
      
      private static const TASKID:uint = 890;
      
      private static var _instance:com.robot.app.task.petstory.Task_890;
       
      
      private var _map:BaseMapProcess;
      
      private var _pet:MovieClip;
      
      private var _step:int = 0;
      
      private var _flag:uint = 0;
      
      private var _fightTimes:uint = 0;
      
      private var _winTimes:uint = 0;
      
      private var _petList:Array;
      
      public function Task_890(param1:PrivateClass)
      {
         this._petList = [677,678,679,684,685,680,681,682,683,686,687,946,947];
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.Task_890
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.Task_890(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         this._pet = this._map.conLevel["pet"];
         this._pet.buttonMode = true;
         ToolTipManager.add(this._pet,"埃洛兽");
         this._pet.addEventListener(MouseEvent.CLICK,this.onPet);
         SocketConnection.addCmdListener(CommandID.FIGHT_RESULT_AILUOSHOU,this.onResult);
         this.checkTask();
      }
      
      private function onResult(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._flag = _loc2_.readUnsignedInt();
         this._fightTimes = _loc2_.readUnsignedInt();
         this._winTimes = _loc2_.readUnsignedInt();
      }
      
      private function onPet(param1:MouseEvent) : void
      {
         var _loc2_:PetInfo = null;
         if(this._step == 1)
         {
            this.dialogSwitch(1);
         }
         else if(this._step == 2)
         {
            _loc2_ = PetManager.getPetInfo(PetManager.defaultTime);
            if(this._petList.indexOf(_loc2_.id) == -1)
            {
               this.dialogSwitch(3);
               return;
            }
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
            FightManager.fightWithBoss("埃洛兽",1);
         }
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         var times:uint = 0;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(this._winTimes == 1)
            {
               this.dialogSwitch(6);
            }
            else
            {
               KTool.playFullMovie(39,function():void
               {
                  TasksManager.complete(TASKID,1,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        _pet.visible = false;
                     }
                  });
               });
            }
         }
         else
         {
            times = uint(this._fightTimes - this._winTimes);
            if(times == 1)
            {
               this.dialogSwitch(4);
            }
            else
            {
               this.dialogSwitch(5);
            }
         }
      }
      
      private function checkTask() : void
      {
         var status:uint = uint(TasksManager.getTaskStatus(TASKID));
         if(status == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASKID,function(param1:Boolean):void
            {
               if(param1)
               {
                  _step = 1;
               }
            });
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASKID,this.getTaskStates);
         }
         else if(status == TasksManager.COMPLETE)
         {
            this._pet.visible = false;
         }
      }
      
      private function getTaskStates(param1:Array) : void
      {
         if(!param1[0])
         {
            this._step = 1;
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            this._step = 2;
         }
      }
      
      public function destroy() : void
      {
         ToolTipManager.remove(this._pet);
         this._pet = null;
      }
      
      private function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.SEER,["埃尔特？你进化了？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.AI_LUO_SHOU,["哼哼，臭铁皮，算你有眼光，哈哈。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SEER,["你怎么又跑到果然星来啦！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.AI_LUO_SHOU,["我是来一雪前耻的！"],null,null,false,function():void
                        {
                           KTool.playFullMovie(38,function():void
                           {
                              dialogSwitch(2);
                           });
                        });
                     });
                  });
               });
               break;
            case 2:
               NpcDialog.show(NPC.AI_LUO_SHOU,["果然精灵们，想保卫家园，就得用自己的实力来证明！只要你们打败我，我保证再也不踏入果然星半步！"],["又来捣乱了！讨厌！埃洛兽，你怎么变样了。"],[function():void
               {
                  NpcDialog.show(NPC.AI_LUO_SHOU,["我在这里摆下擂台，比赛为三局两胜制：你必须在三次对战中胜利两次，才算赢！果然精灵放马过来吧！"],["哼，那你就尝尝果然精灵的厉害吧！"],[function():void
                  {
                     TasksManager.complete(TASKID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           _step = 2;
                        }
                     });
                  }]);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.AI_LUO_SHOU,["我说了，必须是果然精灵才接受挑战！他们想保卫家园，就得用自己的实力来证明！"],["打开精灵背包，把果然多系列精灵作为首选"],[function():void
               {
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.AI_LUO_SHOU,["想打败我，再去修炼一万年吧！"],["果然精灵，加油！加油！（再次点击埃洛兽对战）"],[function():void
               {
               }]);
               break;
            case 5:
               NpcDialog.show(NPC.AI_LUO_SHOU,["哈哈哈！三局两胜，我赢啦！哈哈哈哈！"],["我得在3次对战中取得2次胜利才行！（再次点击埃洛兽对战）"],[function():void
               {
               }]);
               break;
            case 6:
               NpcDialog.show(NPC.AI_LUO_SHOU,["哼，我刚才只是热身而已，接下来有你好看的！"],["来吧！战斗继续！"],[function():void
               {
               }]);
         }
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
