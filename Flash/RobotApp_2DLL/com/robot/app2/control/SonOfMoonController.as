package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class SonOfMoonController
   {
      
      private static const MAP_ARR:Array = [10982,10982,10982];
      
      private static const BUFFERID_ARR1:Array = [1279,1280,1281,1282];
      
      private static const MAP_MOVIE_URL:Array = ["map_10982_SonOfMoon"];
      
      private static const MAP_ARR2:Array = [10990,10982,10990];
      
      private static const BUFFERID_ARR2:Array = [1286,1287,1288,1289];
      
      private static const MAP_MOVIE_URL2:Array = ["map_10990_SonOfMoon","map_10982_SonOfMoon2"];
      
      private static var _currentMapArr:Array = [];
      
      private static var _currentBufferArr:Array = [];
      
      private static var _currentMapMovieURL:Array = [];
      
      private static var _currentTaskFunc:Function;
      
      private static var _currentStep:int = 0;
      
      private static var _currentMapId:int;
      
      private static var _currentMc:MovieClip;
      
      private static var _currentTaskId:int;
       
      
      public function SonOfMoonController()
      {
         super();
      }
      
      public static function initTask(param1:int) : void
      {
         if(param1 == 0)
         {
            _currentBufferArr = BUFFERID_ARR1;
            _currentMapArr = MAP_ARR;
            _currentTaskFunc = startTask1;
            _currentMapMovieURL = MAP_MOVIE_URL;
            _currentTaskId = 3110;
            changeMap(param1);
         }
         else if(param1 == 1)
         {
            _currentBufferArr = BUFFERID_ARR2;
            _currentMapArr = MAP_ARR2;
            _currentTaskFunc = startTask2;
            _currentMapMovieURL = MAP_MOVIE_URL2;
            _currentTaskId = 3111;
            startTask2();
         }
      }
      
      private static function startTask2() : void
      {
         var story:TaskStoryPlayer = null;
         story = new TaskStoryPlayer();
         story.useNewDialog = true;
         _currentStep = currentStep;
         if(_currentStep == 0)
         {
            if(_currentMapId != 10990)
            {
               changeMap(0);
               return;
            }
            loadMapMovie(0,function():void
            {
               story.addMapMovie([_currentMc,1,"mc0"],null,null);
               story.addDialog([NPC.ODEAL,["真看不出来，预言中七罪之神最大的敌人，竟然是你这么个小不点！"]]);
               story.addDialog([NPC.KILLUA,["奇牙！奇牙！"]]);
               story.addDialog([NPC.ODEAL,["你最好还是不要妄想逃跑的事了！我作为傲慢之神的得力手下，看守这片森林已经数百年！"]]);
               story.addDialog([NPC.ODEAL,["像你这样的小家伙，从我的看守下逃走的可能性是零！"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
                  {
                     startTask2();
                  });
               });
               story.start();
            });
         }
         else if(_currentStep == 1)
         {
            if(_currentMapId != 10982)
            {
               changeMap(1);
               return;
            }
            loadMapMovie(1,function():void
            {
               story.addMapMovie([_currentMc,1,"mc0"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["我是谁并不重要的，重要的是我可以帮你们找到你们想找的人。"]]);
               story.addDialog([NPC.SAIXIAOXI,["你知道奇牙的下落吗？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["她被傲慢之神泊莱德抓走了，现在正被囚禁在风雨之森。"]]);
               story.addDialog([NPC.KALULU,["泊莱德为什么要抓走奇牙呢？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["因为有一个古老的预言，日月之子将会终结七罪之神在飓风星云的统治。"]]);
               story.addDialog([NPC.KALULU,["为了一个虚无缥缈的预言就迫害别人，我看这七罪之神不是什么好人。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["虚无缥缈么，只怕未必……不过他们的确不是好人，你们要多加小心。"]]);
               story.addDialog([NPC.SAIXIAOXI,["我们快去救奇牙！"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
                  {
                     startTask2();
                  });
               });
               story.start();
            });
         }
         else if(_currentStep == 2)
         {
            if(_currentMapId != 10990)
            {
               changeMap(2);
               return;
            }
            loadMapMovie(0,function():void
            {
               story.addMapMovie([_currentMc,2,"mc1"],null,null);
               story.addDialog([NPC.SAIXIAOXI,["放了奇牙！"]]);
               story.addDialog([NPC.ODEAL,["你知道这小家伙是谁抓来的吗？"]]);
               story.addDialog([NPC.KALULU,["是泊莱德那个坏蛋！"]]);
               story.addDialog([NPC.ODEAL,["好大的胆！竟然敢诋毁伟大的傲慢之神！和神作对只有死路一条！"]]);
               story.addDialog([NPC.SAIXIAOXI,["如果是邪恶的家伙，就算是神也一样要推翻！米咔，揍他！"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
                  {
                     startTask2();
                  });
               });
               story.start();
            });
         }
         else if(_currentStep == 3)
         {
            story.addFulMovie(["SonOfMoonFullMovie2",true],null,null);
            story.addMapMovie([_currentMc,3,"mc2"],null,null);
            story.addDialog([NPC.BOLAIDE,["奥德迪尔，你玩的很开心嘛！"]]);
            story.addDialog([NPC.ODEAL,["主人！属下无能，没想到光之子实力不弱……"]]);
            story.addDialog([NPC.BOLAIDE,["哼哼，实力不弱？让我看看，你们是月之子的朋友吗？"]]);
            story.addDialog([NPC.SAIXIAOXI,["泊莱德！快放了奇牙！"]]);
            story.addDialog([NPC.BOLAIDE,["放了她，好让她来终结我的统治吗？"]]);
            story.addDialog([NPC.KALULU,["你要是好人，干嘛要终结你的统治？"]]);
            story.addDialog([NPC.BOLAIDE,["哼哼，牙尖嘴利！可惜，最后还是要凭实力说话！你们不是想要救月之子吗？先找到她再说吧！"]],null,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
               {
                  TasksManager.accept(3111,function():void
                  {
                     completeTask();
                  });
               });
            });
            story.start();
         }
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
      
      private static function loadMapMovie(param1:int, param2:Function = null) : void
      {
         var i:int = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getMapAnimate(_currentMapMovieURL[i]),function(param1:MovieClip):void
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
      
      private static function startTask1() : void
      {
         var story:TaskStoryPlayer;
         if(_currentMc == null)
         {
            loadMapMovie(0,function():void
            {
               startTask1();
            });
            return;
         }
         story = new TaskStoryPlayer();
         story.useNewDialog = true;
         _currentStep = currentStep;
         if(_currentStep == 0)
         {
            story.addMapMovie([_currentMc,1,"mc0"],null,null);
            story.addDialog([NPC.KALULU,["这是米咔的新朋友吗？非常的可爱呢？它是我们在泰坦星云的第一个朋友了吧？"]]);
            story.addDialog([NPC.SAIXIAOXI,["米咔，你是怎么认识它的呀？"]]);
            story.addDialog([NPC.MIKA,["米咔！米咔！"]]);
            story.addDialog([NPC.SAIXIAOXI,["了不得！我们家米咔还路见不平，拔刀相助呢！"]]);
            story.addDialog([NPC.KALULU,["小可爱，你叫什么名字啊？"]]);
            story.addDialog([NPC.KILLUA,["奇牙！奇牙！"]]);
            story.addDialog([NPC.KALULU,["原来你的名字叫奇牙啊。"]],null,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
               {
                  startTask1();
               });
            });
         }
         else if(_currentStep == 1)
         {
            _currentMc.mc0.gotoAndStop(459);
            story.addDialog([NPC.KALULU,["奇怪，为什么奇牙会独自出现在这里呢？"]]);
            story.addDialog([NPC.SAIXIAOXI,["对呀奇牙，你有没有家人或者朋友啊？"]]);
            story.addDialog([NPC.ATIEDA,["这里的环境满恶劣的，的确不像是奇牙这么可爱的精灵的家园。"]]);
            story.addMapMovie([_currentMc,2,"mc1"],null,null);
            story.addDialog([NPC.SAIXIAOXI,["泊莱德，又是那个家伙！这个傲慢之神在追捕奇牙！"]]);
            story.addDialog([NPC.KALULU,["他之前还想抓米咔呢！总觉的背后有什么可怕的阴谋。"]]);
            story.addDialog([NPC.ATIEDA,["身为一个神，不庇护弱小，反而横行霸道，这样的也配叫做神？"]]);
            story.addDialog([NPC.SAIXIAOXI,["要是敢欺负俺的米咔，就是神，也和他战斗到底！"]],null,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
               {
                  startTask1();
               });
            });
         }
         else if(_currentStep == 2)
         {
            story.addFulMovie(["SonOfMoonFullMovie",false],null,null);
            story.addMapMovie([_currentMc,3,"mc2"],null,null);
            story.addDialog([NPC.BOLAIDE,["你太顽皮了，这次是你运气好，这么快就被我找到了，下次你再敢逃跑，我可要狠狠的惩罚你了！"]]);
            story.addDialog([NPC.KILLUA,["奇牙！"]]);
            story.addDialog([NPC.BOLAIDE,["哼，你还敢和神顶嘴？！惹怒我可没有好下场，上次惹怒我导致你的家乡被毁灭，你不会这么快就忘记了吧？"]]);
            story.addDialog([NPC.KILLUA,["奇牙……"]]);
            story.addDialog([NPC.BOLAIDE,["你没法挣脱宿命的，月亮之子。你的命运就是永远臣服在我的手中，这是神的旨意！"]]);
            story.addDialog([NPC.KILLUA,["米……咔……"]],null,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
               {
                  startTask1();
               });
            });
         }
         else if(_currentStep == 3)
         {
            story.addMapMovie([_currentMc,4,"mc3"],null,null);
            story.addDialog([NPC.SAIXIAOXI,["奇牙给米咔留下的印记在发光，似乎奇牙遇到了危险！"]]);
            story.addDialog([NPC.KALULU,["不会是泊莱德吧……"]]);
            story.addDialog([NPC.ATIEDA,["可恶，怎么办，我们初来乍到，人生地不熟的，都不知道应该去哪里救它。"]]);
            story.addDialog([NPC.MIKA,["米咔！"]]);
            story.addDialog([NPC.SAIXIAOXI,["这个不用担心，奇牙给米咔留下过印记，它们可以通过这个印记进行心灵的交流！这个印记会引导着我们找到奇牙的！"]]);
            story.addDialog([NPC.ATIEDA,["太好了！还等什么，快出发吧！"]],null,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[_currentStep],true,function():void
               {
                  TasksManager.accept(3110,function():void
                  {
                     completeTask();
                  });
               });
            });
         }
         story.start();
      }
      
      private static function completeTask() : void
      {
         showIcon();
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            TasksManager.complete(_currentTaskId,0);
         });
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showAppModule("SonOfMoonPanel");
         });
         IconController.hideIcon("SonOfMoon_icon");
      }
      
      private static function changeMap(param1:int) : void
      {
         var i:int = param1;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            _currentMapId = param1.mapModel.id;
            _currentTaskFunc();
         });
         MapManager.changeMap(_currentMapArr[i]);
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
         if(!BufferRecordManager.getMyState(_currentBufferArr[2]))
         {
            return 2;
         }
         return 3;
      }
      
      private static function destroy() : void
      {
         MapManager.currentMap.topLevel.removeChild(_currentMc);
         _currentMc.stop();
         _currentMc = null;
         _currentBufferArr = null;
         _currentMapArr = null;
         _currentTaskFunc = null;
         _currentMapMovieURL = null;
         _currentTaskId = 0;
      }
      
      public static function isTaskComplete(param1:int) : Boolean
      {
         if(param1 == 0)
         {
            if(BufferRecordManager.getMyState(BUFFERID_ARR1[3]))
            {
               return true;
            }
         }
         else if(param1 == 1)
         {
            if(BufferRecordManager.getMyState(BUFFERID_ARR2[3]))
            {
               return true;
            }
         }
         return false;
      }
      
      public static function iconManager(param1:MovieClip) : void
      {
         if(isTaskComplete(1) && isTaskComplete(0))
         {
            IconController.hideIcon("SonOfMoon_icon");
         }
         else
         {
            IconController.showIcon("SonOfMoon_icon");
         }
      }
   }
}
