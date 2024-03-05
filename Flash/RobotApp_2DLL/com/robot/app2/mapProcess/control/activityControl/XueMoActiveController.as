package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   
   public class XueMoActiveController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _dataArr:Array = [{
         "npcId":NPC.LAIKENING,
         "task":["想要拿到今年的圣诞礼物？那就先打败我雪夜魔王吧！"],
         "answer":["我要挑战你！","我等会儿再来。"],
         "module":"XueYeMoWangGetPanel"
      },{
         "npcId":NPC.ASHAWEN,
         "task":["誓死守卫雪夜魔王，让我用黑夜永远吞噬你吧！"],
         "answer":["我要挑战你！","我等会儿再来。"],
         "module":"AnyinghufaFightPanel"
      },{
         "npcId":NPC.XILINDUN,
         "task":["誓死守卫雪夜魔王，让我用寒冰永远封锁你吧！"],
         "answer":["我要挑战你！","我等会儿再来。"],
         "module":"XiLinDunPanel"
      }];
       
      
      public function XueMoActiveController()
      {
         super();
      }
      
      public static function initMap963(param1:BaseMapProcess) : void
      {
         var i:int = 0;
         var map:BaseMapProcess = param1;
         _map = map;
         MapListenerManager.add(_map.depthLevel["xilindun"],_clickNpc,"希林顿");
         MapListenerManager.add(_map.depthLevel["laikening"],_clickNpc,"莱科宁");
         MapListenerManager.add(_map.depthLevel["ashawen"],_clickNpc,"阿沙文");
         if(!hasFinshPreTask)
         {
            SocketConnection.send(1022,86066252);
            if(TasksManager.getTaskStatus(1862) == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(1862);
            }
            i = 0;
            while(i < _map.depthLevel.numChildren)
            {
               _map.depthLevel.getChildAt(i).visible = false;
               i++;
            }
            setTimeout(function():void
            {
               MapObjectControl.hideOrShowAllObjects(false);
               MainManager.selfVisible = false;
               KTool.showMapAllPlayerAndMonster(false);
            },200);
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               var _loc1_:int = 0;
               while(_loc1_ < _map.depthLevel.numChildren)
               {
                  _map.depthLevel.getChildAt(_loc1_).visible = true;
                  _loc1_++;
               }
               MapObjectControl.hideOrShowAllObjects(true);
               MainManager.selfVisible = true;
               TasksManager.complete(1862,0);
               KTool.showMapAllPlayerAndMonster(true);
               SocketConnection.send(1022,86066253);
            },"ani963",true);
         }
      }
      
      public static function get hasFinshPreTask() : Boolean
      {
         return TasksManager.getTaskStatus(1862) == TasksManager.COMPLETE;
      }
      
      private static function _clickNpc(param1:MouseEvent) : void
      {
         var type:int = 0;
         var e:MouseEvent = param1;
         var name:String = String(e.currentTarget.name);
         if(name == "laikening")
         {
            type = 0;
         }
         else if(name == "ashawen")
         {
            type = 1;
         }
         else if(name == "xilindun")
         {
            type = 2;
         }
         NpcDialog.show(_dataArr[type].npcId,_dataArr[type].task,_dataArr[type].answer,[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_dataArr[type].module));
         }]);
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc9_:TaskMod = null;
         var _loc10_:TaskMod = null;
         var _loc11_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASHAWEN,["战神联盟，现在认输还来得及。"],["让我们认输？开玩笑！"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["伙伴们，我们一起发力，冲出这团黑雾！"],["等等雷伊，我有办法！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["这团黑雾可难不倒我，我最擅长在黑暗中寻找猎物！"],["看你的了布莱克！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAIKENING,["真是没用的东西……果然又一次让我失望了。"],["对不起，老大……"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["雪夜魔王，终于轮到你了么？圣诞节都快到了，我们可不想跟你浪费时间了！"],["是啊，你们没多少时间了。"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAIKENING,["今年的圣诞节会因为我而变得不一样，你们慢慢感受吧！"],["我们才不要你的圣诞节。"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20131220_4",true]);
               _loc2_.push(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_);
               break;
            case 2:
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
      
      public static function destroy() : void
      {
         MapListenerManager.remove(_map.depthLevel["xilindun"],false);
         MapListenerManager.remove(_map.depthLevel["laikening"],false);
         MapListenerManager.remove(_map.depthLevel["ashawen"],false);
         _map = null;
      }
   }
}
