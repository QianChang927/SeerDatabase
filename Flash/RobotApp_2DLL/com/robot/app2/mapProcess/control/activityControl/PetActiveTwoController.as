package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PetActiveTwoController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function PetActiveTwoController()
      {
         super();
      }
      
      public static function initMap691(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["npcClick"].buttonMode = true;
         _map.conLevel["npcClick"].addEventListener(MouseEvent.CLICK,_npcClickHandler);
         if(!BufferRecordManager.getMyState(778))
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
         NpcDialog.show(NPC.BINSAIKE,["每天上午 0xff000010:00——12:00 0xffffff击败场景内野怪能获得额外冰晶碎片哦！"]);
      }
      
      private static function _equipClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(778))
         {
            SocketConnection.send(1022,86061529);
            _map.btnLevel["clickMc"].visible = false;
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               BufferRecordManager.setMyState(778,true);
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
         var _loc6_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["要想让它降临到这个世上就必须给予其更多的冰雪能量！"],["那该怎么办呢？该不会是还要收集冰晶碎片吧！"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["很遗憾，但只有这样做，才能让这个新生的生命完好无损的出生在这个世界上。不过这次铸造冰晶我会给你全新的奖励哟！快去看看吧！"],["好吧，那怎样才能收集到冰晶碎片呢？"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["只要击败斯诺密洞里的野生精灵，就能得到一块冰晶碎片，每3块0xff0000冰晶碎片0xffffff可以提炼一块0xff0000永恒冰晶0xffffff，" + "提炼的同时也会给你抽取钻石精灵的机会！收集20块永恒冰晶更可以获得稀有绝版精灵哟！" + "稀有绝版来就送，钻石精灵无限摇！"],["明白！我立刻就去！"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_,_loc6_);
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
