package com.robot.app.task.taskscollection
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class Task1715
   {
      
      private static const TASK_ID:uint = 1715;
      
      private static const TASK_ID2:uint = 1757;
      
      private static var _taskState:uint;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
       
      
      public function Task1715()
      {
         super();
      }
      
      public static function initForMap356(param1:BaseMapProcess) : void
      {
         SocketConnection.send(1022,86064501);
         _map = param1;
         MapManager.addEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,hideObject);
      }
      
      private static function hideObject(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,hideObject);
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         (_map.depthLevel["niuniu"] as MovieClip).mouseChildren = false;
         _map.depthLevel["niuniu"].visible = false;
         _map.depthLevel["arrow"].visible = false;
         checkTask1715();
      }
      
      private static function checkTask1715() : void
      {
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               loadMC("map_356_0",function():void
               {
                  TasksManager.accept(TASK_ID,function(param1:Boolean):void
                  {
                     doTask();
                  });
               });
               break;
            case TasksManager.ALR_ACCEPT:
               loadMC("map_356_0",doTask);
               break;
            case TasksManager.COMPLETE:
               checkTask1757();
         }
      }
      
      private static function checkTask1757() : void
      {
         _taskState = TasksManager.getTaskStatus(TASK_ID2);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               loadMC("map_356_1",function():void
               {
                  _taskMC.mouseChildren = false;
                  _taskMC.buttonMode = true;
                  _taskMC.addEventListener(MouseEvent.CLICK,onAcceptTask1757);
               });
               break;
            case TasksManager.ALR_ACCEPT:
               loadMC("map_356_1",doTask2);
               break;
            case TasksManager.COMPLETE:
               initNPC();
         }
      }
      
      private static function onAcceptTask1757(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _taskMC.removeEventListener(MouseEvent.CLICK,onAcceptTask1757);
         TasksManager.accept(TASK_ID2,function(param1:Boolean):void
         {
            SocketConnection.send(1022,86062711);
            doTask2();
         });
      }
      
      private static function loadMC(param1:String, param2:Function = null) : void
      {
         var mcName:String = param1;
         var func:Function = param2;
         ResourceManager.getResource(ClientConfig.getMapAnimate(mcName),function(param1:DisplayObject):void
         {
            _taskMC = param1 as MovieClip;
            _map.conLevel.addChild(_taskMC);
            _taskMC.x = _taskMC.y = 0;
            if(func != null)
            {
               func.call();
            }
         },"movie",3,false);
      }
      
      private static function initNPC() : void
      {
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
         _map.depthLevel["arrow"].visible = true;
         _map.depthLevel["niuniu"].visible = true;
         (_map.depthLevel["niuniu"] as MovieClip).buttonMode = true;
         ToolTipManager.add(_map.depthLevel["niuniu"],"蒙牛未来星的考验");
         (_map.depthLevel["niuniu"] as MovieClip).addEventListener(MouseEvent.CLICK,onNiuniuClick);
      }
      
      private static function onNiuniuClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.NIUNIU,["小赛尔们，快来接受蒙牛未来星的考验吧！"],["我要接受蒙牛未来星的考验！","等会儿再来看看。"],[function():void
         {
            getDefinitionByName("com.robot.app2.control.MengNiuGameController").setup();
         }]);
      }
      
      private static function doTask() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 23
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function doTask2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 13
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            MapManager.removeEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,hideObject);
            (_map.depthLevel["niuniu"] as MovieClip).removeEventListener(MouseEvent.CLICK,onNiuniuClick);
            _map = null;
         }
         if(_taskMC)
         {
            if(_taskMC.hasEventListener(MouseEvent.CLICK))
            {
               _taskMC.removeEventListener(MouseEvent.CLICK,onAcceptTask1757);
            }
            _taskMC = null;
         }
      }
   }
}
