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
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PetActiveController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function PetActiveController()
      {
         super();
      }
      
      public static function initMap691(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(!BufferRecordManager.getMyState(765))
         {
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
      
      private static function _equipClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(765))
         {
            SocketConnection.send(1022,86061189);
            _map.btnLevel["clickMc"].visible = false;
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               BufferRecordManager.setMyState(765,true);
               ModuleManager.showModule(ClientConfig.getAppModule("PetExchangePanel"));
               _map.conLevel["equip"].visible = true;
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
         var _loc7_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["糟了，这可是斯诺星寒冷能量的结晶——万年玄冰，可是他的能量被暗黑战神联盟的家伙给夺走了！"],["那会发生什么呢？"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["斯诺密洞位于斯诺星能量场的核心位置，如果这里的能量结晶失去了能量，可能整个星球的气候都会发生变化。"],["糟了，那我们该怎么办！不能让避暑胜地就这样被毁掉！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["有补救的办法，尽量收集一些永恒冰晶来修补万年玄冰，但是这种永恒冰晶需要通过提炼才能获得。不过嘛，作为斯诺星的一员，如果你们能帮助我们，给你们一些酬劳也是必须的啦！"],["好的，那怎样才能找到提炼永恒冰晶的材料呢？"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["只要击败斯诺密洞里的野生精灵，就可以得到一块0xff0000冰晶碎片0xffffff，每3块0xff0000冰晶碎片0xffffff可以提炼一块0xff0000永恒冰晶0xffffff，提炼的同时我也会给你抽取钻石精灵的机会！收集20块永恒冰晶更可以获得稀有绝版精灵哟！每天不限次数！稀有绝版来就送，钻石精灵无限摇！"],["明白！我立刻就去！"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_);
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
