package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskscollection.Task535;
   import com.robot.app.task.taskscollection.Task536;
   import com.robot.app.task.taskscollection.Task605;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_435 extends BaseMapProcess
   {
       
      
      private var _boadMC:MovieClip;
      
      private var _avatarMC:MovieClip;
      
      private var _boatOutMC:MovieClip;
      
      private var _bossMC:MovieClip;
      
      public function MapProcess_435()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._bossMC = topLevel["boss_mc"];
         this._bossMC.visible = false;
         Task605.initTask_435(this);
         if(TasksManager.getTaskStatus(605) == TasksManager.ALR_ACCEPT)
         {
            Task535.removeResource_2(this);
            Task536.removeResource(this);
            return;
         }
         Task535.initTask_2(this);
         if(TasksManager.getTaskStatus(535) == TasksManager.ALR_ACCEPT)
         {
            Task536.removeResource(this);
            return;
         }
         Task536.initTask(this);
      }
      
      public function initResource() : void
      {
         this._boadMC = animatorLevel["boatMC"];
         this._avatarMC = conLevel["avatarMC"];
         this._avatarMC.mouseEnabled = true;
         this._avatarMC.buttonMode = true;
         this._avatarMC.gotoAndStop(1);
         this._boatOutMC = animatorLevel["boatOutMC"];
         this._avatarMC.addEventListener(MouseEvent.CLICK,this.onAvatarClickHandler);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.petFightOver);
      }
      
      private function petFightOver(param1:PetFightEvent) : void
      {
         var fightData:FightOverInfo;
         var t:uint = 0;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.petFightOver);
         fightData = e.dataObj as FightOverInfo;
         if(fightData.winnerID == MainManager.actorID)
         {
            if(!BufferRecordManager.getState(MainManager.actorInfo,38))
            {
               this._bossMC.visible = true;
               t = setTimeout(function():void
               {
                  AnimateManager.playMcAnimate(_bossMC,0,"",function():void
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,38,true);
                     _bossMC.buttonMode = true;
                     _bossMC.addEventListener(MouseEvent.CLICK,onBossClickHandler);
                  });
                  clearTimeout(t);
               },1000);
            }
         }
      }
      
      private function onBossClickHandler(param1:MouseEvent) : void
      {
         FightBossController.fightBoss("克拉尼特",1);
      }
      
      private function onAvatarClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.clothes.length > 0)
         {
            NpcDialog.show(NPC.SEER,["糟糕！这里的气体果然极具腐蚀！看来必须0xff0000脱去身上的装备0xffffff才能前行了！"],["左边的石块怎么看起来这么奇怪？"]);
         }
         else
         {
            this._avatarMC.gotoAndStop(2);
            this._avatarMC.mouseEnabled = false;
            this._avatarMC.mouseChildren = false;
            Task535.playMC(this._boadMC,0,function():void
            {
               NpcDialog.show(NPC.NIT,["呵呵......我们又见面了！这次你是想要通过死河呢？还是想和我老家伙切磋一下呢？"],["什么？你难道是精灵？(我要和你切磋)","我想要渡过这条死河"],[fightBoss,crossRiver]);
            });
         }
      }
      
      private function crossRiver() : void
      {
         MainManager.actorModel.visible = false;
         DisplayUtil.removeForParent(this._boadMC);
         Task535.playMC(this._boatOutMC,2,function():void
         {
            MapManager.changeMap(436);
         });
      }
      
      private function fightBoss() : void
      {
         if(TasksManager.getTaskStatus(318) == TasksManager.COMPLETE)
         {
            FightBossController.fightBoss("克拉尼特",1);
         }
         else
         {
            FightBossController.fightBoss("克拉尼特");
         }
      }
      
      override public function destroy() : void
      {
         Task605.destroy();
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.petFightOver);
         MainManager.actorModel.visible = true;
         Task535.destroyTask_2();
         Task536.destory();
         if(this._avatarMC)
         {
            this._avatarMC.removeEventListener(MouseEvent.CLICK,this.onAvatarClickHandler);
         }
      }
   }
}
