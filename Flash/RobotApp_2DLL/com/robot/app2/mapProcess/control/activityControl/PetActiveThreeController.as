package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PetActiveThreeController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TIME_IN:Array = [new CronTimeVo("0-59","10-11","*","*","*","2013")];
       
      
      public function PetActiveThreeController()
      {
         super();
      }
      
      public static function initMap691(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["npcClick"].buttonMode = true;
         _map.conLevel["npcClick"].addEventListener(MouseEvent.CLICK,_npcClickHandler);
         if(!BufferRecordManager.getMyState(789))
         {
            _map.conLevel["npcClick"].visible = false;
            _map.conLevel["equip"].visible = false;
            _map.btnLevel["clickMc"].addEventListener(MouseEvent.CLICK,_equipClick);
            MovieClip(_map.btnLevel["clickMc"]).buttonMode = true;
            KTool.hideMapAllPlayerAndMonster();
         }
         else
         {
            _map.btnLevel["clickMc"].visible = false;
            taskMc.visible = false;
            _map.conLevel["equip"].visible = true;
         }
      }
      
      private static function _npcClickHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.BINSAIKE,["这次除了击败场景内野怪收集0xff0000寒冰生命元素0xffffff，还可以来挑战我哦，上午 0xff000010:00-12:000xffffff 每次击败我都可以获得5个0xff0000寒冰生命元素0xffffff来滋养这只可爱的精灵哦！"],["我要挑战你！","我去打野怪收集！"],[_fightBoss,null]);
      }
      
      private static function _fightBoss() : void
      {
         if(!SystemTimerManager.isActive(TIME_IN))
         {
            Alarm.show("只有上午10:00-12:00才能与宾塞克对战哟！");
         }
         else
         {
            SocketConnection.send(1022,86061926);
            FightManager.fightWithBoss("宾塞克",6);
         }
      }
      
      private static function _equipClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(789))
         {
            SocketConnection.send(1022,86061920);
            _map.btnLevel["clickMc"].removeEventListener(MouseEvent.CLICK,_equipClick);
            _map.btnLevel["clickMc"].visible = false;
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               BufferRecordManager.setMyState(789,true);
               ModuleManager.showModule(ClientConfig.getAppModule("PetExchangePanel"));
               _map.conLevel["equip"].visible = true;
               _map.conLevel["npcClick"].visible = true;
               taskMc.visible = false;
               KTool.showMapAllPlayerAndMonster();
            });
         }
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["小家伙的生命好像还不够稳定，需要更多的0xff0000寒冰生命元素0xffffff来增强她的生命力。"],["这次又要怎样收集这种东西呢？"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["这次除了击败场景内野怪收集0xff0000寒冰生命元素0xffffff，还可以来挑战我哦，每次击败我都可以获得5个0xff0000寒冰生命元素0xffffff来滋养这只可爱的精灵哦！"],["好，这只精灵我要定了！"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.depthLevel["taskMc"];
      }
   }
}
