package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_764;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.app.task.taskscollection.Task764;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_43 extends BaseMapProcess
   {
       
      
      private var _picBook:AppModel;
      
      private var _redDia:MovieClip;
      
      private var _qiangMc:MovieClip;
      
      private var _xitaNpc:MovieClip;
      
      private var _box:DialogBox;
      
      private var _boxTime:Timer;
      
      private var _musicMc:MovieClip;
      
      public function MapProcess_43()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._boxTime = new Timer(6 * 1000);
         this._boxTime.addEventListener(TimerEvent.TIMER,this.onBoxTimer);
         this._redDia = conLevel.getChildByName("redDia") as MovieClip;
         this._redDia.visible = false;
         this._redDia.mouseEnabled = false;
         this._qiangMc = MapManager.currentMap.animatorLevel.getChildByName("qiangMc") as MovieClip;
         DisplayUtil.removeForParent(this._qiangMc);
         this._xitaNpc = conLevel.getChildByName("xitaNpc") as MovieClip;
         this._musicMc = conLevel.getChildByName("musicMc") as MovieClip;
         this._musicMc.gotoAndStop(1);
         this._musicMc.mouseEnabled = false;
         this._musicMc.buttonMode = true;
         this.cheak();
         SocketConnection.send(1022,86062426);
      }
      
      override public function destroy() : void
      {
         Task764.destroy();
         this._boxTime.stop();
         this._boxTime.removeEventListener(TimerEvent.TIMER,this.onBoxTimer);
         this._boxTime = null;
         if(this._picBook)
         {
            this._picBook.sharedEvents.removeEventListener(Event.CLOSE,this.onPicBookClose);
            this._picBook.destroy();
            this._picBook = null;
         }
         this._redDia = null;
         this._qiangMc = null;
         this._musicMc.removeEventListener(MouseEvent.CLICK,this.onMusicClick);
         this._musicMc = null;
      }
      
      private function cheak() : void
      {
         animatorLevel["task764MC"].visible = false;
         if(TasksManager.getTaskStatus(TaskController_764.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task764.initTaskForMap43(this);
         }
         else
         {
            if(TasksManager.getTaskStatus(8) == TasksManager.COMPLETE)
            {
               this._xitaNpc.mouseEnabled = false;
            }
            else
            {
               this.onBoxTimer(null);
               this._boxTime.start();
            }
            if(TasksManager.getTaskStatus(8) == TasksManager.ALR_ACCEPT)
            {
               this._redDia.mouseEnabled = true;
            }
            TasksManager.getProStatus(8,0,function(param1:Boolean):void
            {
               if(!param1)
               {
                  _redDia.visible = true;
               }
            });
         }
      }
      
      private function onMusicClick(param1:MouseEvent) : void
      {
         if(this._musicMc.currentFrame == 1)
         {
            this._musicMc.gotoAndStop(2);
         }
      }
      
      private function showBook() : void
      {
         if(this._picBook == null)
         {
            this._picBook = new AppModel(ClientConfig.getBookModule("XitaPictureBook"),"正在打开西塔珍贵的回忆图册");
            this._picBook.setup();
            this._picBook.sharedEvents.addEventListener(Event.CLOSE,this.onPicBookClose);
         }
         this._picBook.show();
      }
      
      private function onBoxTimer(param1:TimerEvent) : void
      {
         if(this._box)
         {
            this._box.destroy();
            this._box = null;
         }
         this._box = new DialogBox();
         this._box.show("我的记忆晶体不见了，好像有很重要的回忆在里面。",200,100,this._xitaNpc);
      }
      
      private function onRecDiaComplete() : void
      {
         TasksManager.complete(8,2,function(param1:Boolean):void
         {
            if(param1)
            {
               showBook();
            }
         });
      }
      
      private function onPicBookClose(param1:Event) : void
      {
         this._xitaNpc.mouseEnabled = false;
         NpcTipDialog.show("啊，我终于想起了一切。我是赫尔卡星的能源机器人，西塔。",this.dia1,NpcTipDialog.XITA);
      }
      
      private function dia2() : void
      {
         NpcTipDialog.show("我带你回赛尔号吧，博士肯定能把你修复的。",this.dia3,NpcTipDialog.SEER_SAD);
      }
      
      private function dia1() : void
      {
         NpcTipDialog.show("感谢你赛尔，这颗" + TextFormatUtil.getRedTxt("记忆晶体") + "就送给你做装饰吧，以后你的珍贵回忆也能记录在里面。",this.dia2,NpcTipDialog.XITA);
      }
      
      private function dia3() : void
      {
         NpcTipDialog.show("这艘飞船就是我的家。“忠诚”是我的最初设定。我仍然坚信，走散的伙伴们会回来的。",this.dia4,NpcTipDialog.XITA);
      }
      
      private function dia4() : void
      {
         NpcTipDialog.show("船长曾经告诉我，即使相隔几万光年，朋友间的默契是无法被分开的。这里有我珍贵的回忆，我将一直守候在这里。下次再见了我的新朋友，赛尔。",function():void
         {
            TasksManager.complete(8,4);
         },NpcTipDialog.XITA);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         Alarm.show("使用头部射击试试！");
      }
      
      public function showXBSDialog() : void
      {
         this._qiangMc.addFrameScript(this._qiangMc.totalFrames - 1,function():void
         {
            _qiangMc.addFrameScript(_qiangMc.totalFrames - 1,null);
            DisplayUtil.removeForParent(_qiangMc);
            TasksManager.complete(8,0,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  NpcTipDialog.show("咕嘎！咕咕咕咕！咕嘎咕嘎。",function():void
                  {
                     NpcTipDialog.show("诶诶，怎么抢了就走，别跑！",function():void
                     {
                        NpcTipDialog.show("怎么回事？这些精灵脾气不太好啊。博士也许能听懂他的话，赶快联系博士！",function():void
                        {
                           NpcTipDialog.show("我已经收到了录音。他把你当成了海盗，以为又要来抢东西！你打开联络器，我随时给你翻译。",function():void
                           {
                              MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                              {
                                 var mc:MovieClip = null;
                                 var e:MapEvent = param1;
                                 mc = MapManager.currentMap.controlLevel["hit_8"];
                                 mc.addEventListener(MouseEvent.CLICK,onClick);
                                 mc.buttonMode = true;
                                 MapManager.addEventListener(MapEvent.MAP_DESTROY,function(param1:MapEvent):void
                                 {
                                    MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
                                    mc.removeEventListener(MouseEvent.CLICK,onClick);
                                    mc.buttonMode = false;
                                 });
                                 MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                              });
                              MapManager.changeMap(40);
                           },NpcTipDialog.DOCTOR,-80);
                        },NpcTipDialog.SEER_SAD,-80);
                     },NpcTipDialog.SEER,-80);
                  },NpcTipDialog.XUAN_BING_SHOU_3,-80);
               }
            });
         });
         MapManager.currentMap.animatorLevel.addChild(this._qiangMc);
         this._qiangMc.gotoAndPlay(1);
         this._redDia.visible = false;
      }
      
      public function showXita() : void
      {
         CommonUI.removeYellowArrow(topLevel);
         if(TasksManager.getTaskStatus(8) == TasksManager.UN_ACCEPT)
         {
            NpcTipDialog.show("你是谁？我的伙伴都去哪里了？我的记忆晶体不见了，应该有五块。你能帮我找回来吗?",function():void
            {
               TasksManager.accept(8,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     _redDia.mouseEnabled = true;
                     NpcTipDialog.show("飞船中间那块红色晶体好像就是其中一个。",null,NpcTipDialog.XITA);
                  }
               });
            },NpcTipDialog.XITA);
         }
         else if(TasksManager.getTaskStatus(8) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(8,function(param1:Array):void
            {
               if(param1[1])
               {
                  if(!param1[2])
                  {
                     showBook();
                     return;
                  }
               }
               var _loc2_:Boolean = true;
               var _loc3_:int = 0;
               while(_loc3_ < 2)
               {
                  if(!param1[_loc3_])
                  {
                     _loc2_ = false;
                     break;
                  }
                  _loc3_++;
               }
               if(_loc2_)
               {
                  NpcTipDialog.show("感谢你找回了所有的记忆晶体，我好像是……",onRecDiaComplete,NpcTipDialog.XITA);
               }
               else
               {
                  NpcTipDialog.show("找到记忆晶体了吗？",null,NpcTipDialog.XITA);
               }
            });
         }
      }
      
      private function handler() : void
      {
         conLevel["ddHatMc"].gotoAndStop(1);
         conLevel["ddHatMc"].visible = false;
      }
   }
}
