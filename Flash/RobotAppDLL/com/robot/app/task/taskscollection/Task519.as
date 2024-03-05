package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   
   public class Task519
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _panel:AppModel;
       
      
      public function Task519()
      {
         super();
      }
      
      public static function initTask(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var status:uint = uint(TasksManager.getTaskStatus(519));
         if(status == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(519,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro0();
               }
            });
         }
         else if(status != TasksManager.COMPLETE)
         {
            TasksManager.getProStatusList(519,function(param1:Array):void
            {
               startPro0();
            });
         }
      }
      
      private static function startPro0() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCollectionList);
         ItemManager.getCollection();
      }
      
      private static function onCollectionList(param1:ItemEvent) : void
      {
         var e:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCollectionList);
         if(Boolean(ItemManager.containsCollection(400066)) && Boolean(ItemManager.containsCollection(400067)))
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task519_1"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task519_2"),function():void
               {
                  TasksManager.getProStatusList(519,function(param1:Array):void
                  {
                     var arr:Array = param1;
                     if(!arr[0])
                     {
                        TasksManager.complete(519,0,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           if(b)
                           {
                              TasksManager.complete(519,1,function(param1:Boolean):void
                              {
                                 var b:Boolean = param1;
                                 if(b)
                                 {
                                    TasksManager.complete(519,2,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          finishTask();
                                       }
                                    });
                                 }
                              });
                           }
                        });
                     }
                     else if(Boolean(arr[0]) && !arr[1])
                     {
                        TasksManager.complete(519,1,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           if(b)
                           {
                              TasksManager.complete(519,2,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    finishTask();
                                 }
                              });
                           }
                        });
                     }
                     else if(Boolean(arr[1]) && !arr[2])
                     {
                        TasksManager.complete(519,2,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              finishTask();
                           }
                        });
                     }
                  });
               });
            });
         }
      }
      
      private static function finishTask() : void
      {
         TasksManager.complete(519,3);
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCollectionList);
      }
   }
}
