package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class AttackOnAiberController
   {
      
      private static var BUFFERID_ARR:Array = [1294,1295,1296];
      
      private static var _currentBufferArr:Array = [];
      
      private static var _currentTaskFunc:Function;
      
      private static var _currentStep:int = 0;
      
      private static var _currentMapId:int;
      
      private static var _currentMc:MovieClip;
      
      private static var _currentTaskId:int;
       
      
      public function AttackOnAiberController()
      {
         super();
      }
      
      private static function hideIcon() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         ToolBarController.panel.hide();
         KTool.showMapAllPlayerAndMonster(false);
      }
      
      private static function showIcon() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         ToolBarController.panel.show();
         KTool.showMapAllPlayerAndMonster(true);
      }
      
      private static function loaderMc(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("AttackOnAiber_mapMovie"),function(param1:MovieClip):void
         {
            if(Boolean(_currentMc) && Boolean(_currentMc.parent))
            {
               _currentMc.parent.removeChild(_currentMc);
            }
            _currentMc = param1;
            hideIcon();
            MapManager.currentMap.topLevel.addChild(_currentMc);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function initTask() : void
      {
         _currentBufferArr = BUFFERID_ARR;
         _currentTaskFunc = startTask;
         _currentTaskId = 0;
      }
      
      public static function startTask(param1:int) : void
      {
         var taskId:int = param1;
         var story:TaskStoryPlayer = new TaskStoryPlayer();
         story.useNewDialog = true;
         NpcDialogNew_1._HasDanmu = false;
         hideIcon();
         switch(currentStep)
         {
            case 0:
               story.addFulMovie(["AttackOnAiberFull",true]);
               story.addMapMovie([_currentMc,1,"mc1"]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["你想做什么？"]]);
               story.addDialog([NPC.ABB,["我打算给赛尔号送一份大礼。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["大礼？"]]);
               story.addDialog([NPC.ABB,["哈哈哈哈，不错！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["你又想袭击谁了？"]]);
               story.addDialog([NPC.ABB,["谁？no no no！我要袭击整个赛尔号！"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[0],true,function():void
                  {
                     setState(1);
                     startTask(taskId);
                  });
               });
               break;
            case 1:
               story.addMapMovie([_currentMc,2,"mc2"]);
               story.addDialog([NPC.SAIXIAOXI,["哇！刚才奇牙进化了！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["月神项链可以帮助奇牙将力量汇聚起来，进而突破极限。"]]);
               story.addDialog([NPC.SAIXIAOXI,["可是她很快又变回原形了！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["创世之力可不好驾驭！奇牙还是个幼小的精灵，精神力量不够强大！除非……"]]);
               story.addDialog([NPC.SAIXIAOXI,["除非？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["除非她的情绪异常的激动，但是这始终不是正途，还是借助艰苦的锻炼更靠谱一点。"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[1],true,function():void
                  {
                     setState(2);
                     startTask(taskId);
                  });
               });
               break;
            case 2:
               story.addMapMovie([_currentMc,3,"mc3"]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["老朋友，别来无恙啊！"]]);
               story.addDialog([NPC.SAIXIAOXI,["你们，是认识的？"]]);
               story.addDialog([NPC.TITAN,["我们认识很久了。怎么样，老朋友，最近有什么新闻么？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["艾伯那家伙似乎准备对赛尔号做什么。"]]);
               story.addDialog([NPC.SAIXIAOXI,["什么！这可是十万火急！我得赶紧去和罗杰船长汇报。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["黑暗势力已经按耐不住了！看起来一场大战在所难免了！"]]);
               story.addDialog([NPC.TITAN,["该来的，总归还是要来的！希望赛尔号，能度过这一劫！"]],null,function():void
               {
                  var itemsId:Array = null;
                  var b:Boolean = false;
                  itemsId = [300157,400063,1400352,1200155];
                  b = true;
                  ItemManager.updateItems(itemsId,function():void
                  {
                     var _loc1_:int = 0;
                     while(_loc1_ < itemsId.length)
                     {
                        if(ItemManager.getNumByID(itemsId[_loc1_]) >= ItemXMLInfo.getMaxNum(itemsId[_loc1_]))
                        {
                           Alarm.show("你的" + ItemXMLInfo.getName(itemsId[_loc1_]) + "已经达到上限了，暂时无法获得奖励哦！请将其消耗掉一部分再来领取奖励！");
                           iconManager(null);
                           destroy();
                           showIcon();
                           b = false;
                        }
                        _loc1_++;
                     }
                     if(b)
                     {
                        completeTask();
                     }
                  });
               });
         }
         story.start();
      }
      
      private static function setState(param1:int) : void
      {
         StatManager.sendStat2014("1127支线之进击的艾伯","完成记录点" + param1 + "剧情",StatManager.RUN_ACT_2015);
      }
      
      private static function completeTask() : void
      {
         TasksManager.accept(3118,function():void
         {
            TasksManager.complete(3118,0,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[2],true,function():void
               {
                  setState(3);
                  iconManager(null);
                  destroy();
                  showIcon();
               });
            });
         });
      }
      
      private static function destroy() : void
      {
         MapManager.currentMap.topLevel.removeChild(_currentMc);
         _currentMc.stop();
         _currentMc = null;
         _currentBufferArr = null;
         _currentTaskFunc = null;
         _currentTaskId = 0;
      }
      
      private static function get currentStep() : int
      {
         if(!BufferRecordManager.getMyState(_currentBufferArr[0]))
         {
            return 0;
         }
         if(!BufferRecordManager.getMyState(_currentBufferArr[1]))
         {
            return 1;
         }
         return 2;
      }
      
      public static function isTaskComplete() : Boolean
      {
         if(TasksManager.getTaskStatus(3118) == 3)
         {
            return true;
         }
         return false;
      }
      
      public static function iconClick(param1:MovieClip = null) : void
      {
         var mc:MovieClip = param1;
         if(!isTaskComplete())
         {
            initTask();
            loaderMc(function():void
            {
               startTask(3118);
            });
         }
         else
         {
            Alarm.show("你已经完成任务，请期待后续精彩任务！");
         }
      }
      
      public static function iconManager(param1:MovieClip) : void
      {
         if(isTaskComplete())
         {
            IconController.hideIcon("AttackOnAiber");
         }
         else
         {
            IconController.showIcon("AttackOnAiber");
         }
      }
   }
}
