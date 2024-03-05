package com.robot.app.mapProcess.active
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class NakedPumpkinActivity
   {
      
      private static var _rindCount:uint;
      
      private static var _nextRoundTime:uint;
      
      private static var _timer:Timer;
      
      private static var _lastCheckState:Boolean;
      
      private static var _isStartHunt:Boolean = false;
      
      public static const TIME_TEXT:String = "4月22日—4月29日 17:00-20:00";
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","17-19","22-29","4","*","2016")]);
       
      
      public function NakedPumpkinActivity()
      {
         super();
      }
      
      public static function initForMap786() : void
      {
         _timer = new Timer(30000);
         _timer.addEventListener(TimerEvent.TIMER,timerCheckFun);
         _timer.start();
         timerCheckFun();
         initScene();
      }
      
      private static function initScene() : void
      {
         if(isInActivityTime)
         {
            clockMv.visible = true;
            updateActivityInfor(function():void
            {
               if(!_isStartHunt)
               {
                  back2Movie1();
               }
               updateProgressBar();
            });
         }
         clockMv.addEventListener(MouseEvent.CLICK,clockClick);
         clockMv.buttonMode = true;
         if(TasksManager.getTaskStatus(1254) == TasksManager.ALR_ACCEPT)
         {
            clockMv.visible = false;
            progressBar.visible = false;
         }
      }
      
      private static function back2Movie1() : void
      {
         mapMovie.gotoAndStop(1);
         getChildAferChangeFrame(mapMovie,"nangua",function(param1:MovieClip):void
         {
            param1.addEventListener(MouseEvent.CLICK,pumpkinClick);
            param1.buttonMode = true;
            param1.gotoAndStop(_rindCount + 1);
         });
      }
      
      private static function timerCheckFun(param1:* = null) : void
      {
         var e:* = param1;
         if(TasksManager.getTaskStatus(1254) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         if(isInActivityTime)
         {
            progressBar.visible = true;
            if(!_lastCheckState)
            {
               _lastCheckState = true;
            }
            if(!_isStartHunt)
            {
               updateActivityInfor(function():void
               {
                  if(_nextRoundTime <= 10)
                  {
                     avatar2Map();
                     _nextRoundTime = 6 * 60;
                     timeText.text = "";
                  }
                  else
                  {
                     timeText.text = Math.ceil(_nextRoundTime / 60) + "分钟";
                  }
                  updateProgressBar();
               });
            }
         }
         else
         {
            progressBar.visible = false;
            if(_lastCheckState)
            {
               _lastCheckState = false;
            }
            timeText.text = "";
         }
         if(TasksManager.getTaskStatus(1254) == TasksManager.ALR_ACCEPT)
         {
            clockMv.visible = false;
            progressBar.visible = false;
         }
      }
      
      private static function pumpkinClick(param1:* = null) : void
      {
         var _loc2_:Array = null;
         if(TasksManager.getTaskStatus(1254) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         if(hasFinshPreTask)
         {
            if(isInActivityTime)
            {
               if(_rindCount == 0)
               {
                  playTaskInActivity();
               }
               else
               {
                  playPumpkinDialogInActivity();
               }
            }
            else
            {
               _loc2_ = [[NPC.SHENMINANGUA,["那个可恶的采瓜贼在每天的0xff000017:00-20:000xFFFFFF，每6分钟就会飘过这里。一定要帮我夺回瓜皮啊少年~光溜溜的感觉真的很不好o(>﹏<)o"],["嗯，到时让它尝尝我的厉害！"]]];
               DialogUtil.playDilogs(_loc2_,null);
            }
         }
         else
         {
            playPreTask();
         }
      }
      
      private static function playPreTask() : void
      {
         AnimateManager.playMcAnimate(mapMovie,2,"mc2",function():void
         {
            playPumpkinDialogInPreTask(function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,428,true);
               SocketConnection.send(1022,86051264);
               mapMovie.gotoAndStop(1);
               back2Movie1();
            });
         });
      }
      
      private static function playPumpkinDialogInPreTask(param1:Function = null) : void
      {
         var _loc2_:Array = [[NPC.SEER,["O(╯□╰)o…我是来帮助你的….采瓜贼？哪里来的采瓜贼？瓜在哪里？"],null],[NPC.SHENMINANGUA,["我就是瓜啊！看不起没有瓜皮的瓜吗？"],["…呵呵，你看起来好好笑…"]],[NPC.SHENMINANGUA,["呜呜…有只精灵把我的瓜皮都偷走了…想我当年也是人见人爱花见花开，没想到竟落到这步田地..谁能帮帮我啊？"],["那就让见义勇为的赛尔来帮助你吧！"]],[NPC.SHENMINANGUA,["真的？太好了~那个可恶的采瓜贼在每天的0xff000017:00-20:000xFFFFFF，每6分钟就会飘过这里。一定要帮我夺回瓜皮啊少年~光溜溜的感觉真的很不好o(>﹏<)o"],["嗯，到时让它尝尝我的厉害！"]]];
         if(null != param1)
         {
            DialogUtil.playDilogs(_loc2_,[param1]);
         }
         else
         {
            DialogUtil.playDilogs(_loc2_,null);
         }
      }
      
      private static function playPumpkinDialogInActivity() : void
      {
         var _loc1_:Array = [[NPC.SHENMINANGUA,["那个可恶的采瓜贼0xff0000每隔6分钟0xFFFFFF就会路过这里一次。快帮我夺回瓜皮~只有夺回全部七片瓜皮，我才能恢复光鲜亮丽!不然怎么见人啊呜呜呜…"],null]];
         DialogUtil.playDilogs(_loc1_,null);
      }
      
      private static function playTaskInActivity() : void
      {
         AnimateManager.playMcAnimate(mapMovie,2,"mc2",function():void
         {
            playPumpkinDialogInActivity();
            back2Movie1();
         });
      }
      
      private static function avatar2Map() : void
      {
         var dialogsArray:Array = null;
         var dialogsArray2:Array = null;
         _isStartHunt = true;
         timeText.text = "";
         dialogsArray = [[NPC.SEER,["你这个恶作剧的采瓜贼！别得意，我的新朋友会帮我教训你的！"],null]];
         dialogsArray2 = [[NPC.SHENMINANGUA,["看到了，在那里在那里！快把这个瓜皮大盗找出来，帮我夺回瓜皮~"],["嗯，就让我的火眼金睛把它搜出来~"]]];
         AnimateManager.playMcAnimate(mapMovie,3,"mc3",function():void
         {
            DialogUtil.playDilogs(dialogsArray,[function():void
            {
               AnimateManager.playMcAnimate(mapMovie,4,"mc4",function():void
               {
                  hideAvatar();
               });
               getChildAferChangeFrame(mapMovie,"mc4",function(param1:*):void
               {
                  var c:* = param1;
                  getChildAferChangeFrame(mapMovie["mc4"],"gua4",function(param1:MovieClip):void
                  {
                     var child:MovieClip = param1;
                     child["buttonMode"] = true;
                     child.addEventListener(MouseEvent.CLICK,function():void
                     {
                        DialogUtil.playDilogs(dialogsArray2,null);
                     });
                     child.gotoAndStop(_rindCount + 1);
                  });
               });
            }]);
         });
         getChildAferChangeFrame(mapMovie,"mc3",function(param1:*):void
         {
            var c:* = param1;
            getChildAferChangeFrame(mapMovie["mc3"],"gua4",function(param1:MovieClip):void
            {
               param1.gotoAndStop(_rindCount + 1);
            });
         });
      }
      
      private static function huntAvatar() : void
      {
         sendHuntCommond(function(param1:uint, param2:Boolean):void
         {
            var catchTime:uint = param1;
            var isIndext7:Boolean = param2;
            AnimateManager.playMcAnimate(mapMovie,5,"mc5",function():void
            {
               DebugTrace.show("播放 第" + (5 + _rindCount) + "帧");
               AnimateManager.playMcAnimate(mapMovie,5 + _rindCount,"mc" + (5 + _rindCount),function():void
               {
                  updateProgressBar();
                  if(isIndext7)
                  {
                     MainManager.selfVisible = false;
                     ToolBarController.showOrHideAllUser(false);
                     AnimateManager.playMcAnimate(mapMovie,13,"mc13",function():void
                     {
                        MainManager.selfVisible = true;
                        ToolBarController.showOrHideAllUser(true);
                        back2Movie1();
                        if(0 != catchTime)
                        {
                           GetPetController.getPet(1384,catchTime);
                        }
                        AnimateManager.playMcAnimate(mapMovie,14,"mc14",function():void
                        {
                           _rindCount = 0;
                           huntOver();
                        });
                     });
                  }
                  else
                  {
                     huntOver();
                  }
               });
            });
         });
      }
      
      private static function huntOver() : void
      {
         back2Movie1();
         updateProgressBar();
         updateActivityInfor(function():void
         {
            _isStartHunt = false;
            if(isInActivityTime)
            {
               timeText.text = "6分钟";
            }
         });
      }
      
      private static function hideAvatar() : void
      {
         var hasFind:Boolean = false;
         hasFind = false;
         getChildAferChangeFrame(mapMovie["mc4"],"hideMc",function(param1:MovieClip):void
         {
            var randomNum:int;
            var i:int;
            var t:uint = 0;
            var mc:MovieClip = param1;
            mc.visible = true;
            randomNum = int(Math.random() * 5);
            i = 0;
            while(i < 5)
            {
               if(i == randomNum)
               {
                  mc.getChildByName("a" + i).visible = true;
                  mc.getChildByName("a" + i)["buttonMode"] = true;
                  mc.getChildByName("a" + i).addEventListener(MouseEvent.CLICK,function(param1:Event):void
                  {
                     hasFind = true;
                     param1.currentTarget.removeEventListener(MouseEvent.CLICK,arguments.callee);
                     huntAvatar();
                  });
               }
               else
               {
                  mc.getChildByName("a" + i).visible = false;
               }
               i++;
            }
            t = setTimeout(function():void
            {
               clearTimeout(t);
               if(!hasFind)
               {
                  _isStartHunt = false;
                  avatar2Map();
               }
            },1000 * 60 * 3);
         });
      }
      
      private static function get mapMovie() : MovieClip
      {
         return MapManager.currentMap.controlLevel["activity_movie"] as MovieClip;
      }
      
      private static function get hasFinshPreTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,428);
      }
      
      private static function updateActivityInfor(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.NAKEDPUMPKIN_INFOR,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.NAKEDPUMPKIN_INFOR,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            DebugTrace.show(_loc3_.length);
            _loc3_.position = 0;
            _nextRoundTime = _loc3_.readUnsignedInt();
            DebugTrace.show(_nextRoundTime);
            _rindCount = _loc3_.readUnsignedInt();
            DebugTrace.show(_rindCount);
            if(null != fun)
            {
               fun.call();
            }
         });
         SocketConnection.send(CommandID.NAKEDPUMPKIN_INFOR);
      }
      
      private static function sendHuntCommond(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.NAKEDPUMPKIN_HUNT,function(param1:SocketEvent):void
         {
            var _loc4_:uint = 0;
            SocketConnection.removeCmdListener(CommandID.NAKEDPUMPKIN_HUNT,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            if(_rindCount == 6)
            {
               _loc3_.readUnsignedInt();
               _rindCount = 7;
            }
            else
            {
               _rindCount = _loc3_.readUnsignedInt();
            }
            _loc4_ = _loc3_.readUnsignedInt();
            if(null != fun)
            {
               fun.call(null,_loc4_,7 == _rindCount);
            }
         });
         SocketConnection.send(CommandID.NAKEDPUMPKIN_HUNT);
      }
      
      private static function get isInActivityTime() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      public static function destory() : void
      {
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,timerCheckFun);
            _timer = null;
         }
         clockMv.removeEventListener(MouseEvent.CLICK,clockClick);
         _isStartHunt = false;
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
      }
      
      private static function getChildAferChangeFrame(param1:MovieClip, param2:String, param3:Function) : void
      {
         var mc:MovieClip = param1;
         var name:String = param2;
         var fun:Function = param3;
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            var _loc3_:DisplayObject = mc[name];
            if(_loc3_ != null)
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               fun.call(null,_loc3_);
            }
         });
      }
      
      private static function updateProgressBar() : void
      {
         progressBar.gotoAndStop(_rindCount + 1);
      }
      
      private static function get progressBar() : MovieClip
      {
         return mapMovie["p_bar"] as MovieClip;
      }
      
      private static function get clockMv() : MovieClip
      {
         return mapMovie["clock"] as MovieClip;
      }
      
      private static function get timeText() : TextField
      {
         return clockMv["time_txt"] as TextField;
      }
      
      private static function clockClick(param1:*) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ActivityNakedPumpkinPanel"),"正在加载...");
      }
   }
}
