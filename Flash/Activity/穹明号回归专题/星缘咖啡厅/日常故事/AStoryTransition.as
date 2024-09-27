package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.A15thStoryInfo;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import gs.TweenLite;
   import org.taomee.manager.EventManager;
   
   public class AStoryTransition
   {
      private var ui:MovieClip;
      
      public var backPanel:String;
      
      private var showType:String;
      
      private var whiteOrBlack:int;
      
      private var showArg:String = "";
      
      private var requireClick:Boolean = true;
      
      private var storyId:int = 0;
      
      private var animTimer:Timer;
      
      public function AStoryTransition(_mc:MovieClip)
      {
         super();
         this.ui = _mc;
         this.animTimer = new Timer(100,16);
         this.animTimer.addEventListener(TimerEvent.TIMER_COMPLETE,this.onAnimCompleted);
         this.ui.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.ui.visible = false;
      }
      
      public function show(data:Object = null) : void
      {
         var shtStr:String = null;
         this.ui.visible = true;
         if(String(data).indexOf("Start") == 0 || String(data).indexOf("End") == 0)
         {
            this.showType = String(data).split("_")[0];
            this.storyId = String(data).split("_")[1];
         }
         else
         {
            this.showType = "转场";
            shtStr = String(data).split("_")[0];
            this.whiteOrBlack = shtStr.split(",")[0];
            if(this.whiteOrBlack == 2 || this.whiteOrBlack == 3)
            {
               this.requireClick = shtStr.split(",")[1] != "1";
               this.showArg = String(data).split("_")[1];
            }
         }
         this.showUI();
      }
      
      private function showUI() : void
      {
         var storyXML:XML = null;
         var fid:int = 0;
         if(this.ui != null)
         {
            if(this.showType == "转场")
            {
               this.ui.startMc.visible = false;
               this.ui.endMc.visible = false;
               if(this.whiteOrBlack == 2)
               {
                  this.ui.blackMc.visible = true;
                  this.ui.blackMc.desTxt.htmlText = this.showArg;
                  this.ui.whiteMc.visible = false;
               }
               else if(this.whiteOrBlack == 3)
               {
                  this.ui.whiteMc.visible = true;
                  this.ui.whiteMc.desTxt.htmlText = this.showArg;
                  this.ui.blackMc.visible = false;
               }
            }
            else
            {
               this.ui.startMc.visible = false;
               this.ui.endMc.visible = false;
               this.ui.whiteMc.visible = false;
               this.ui.blackMc.visible = false;
               if(this.showType == "Start")
               {
                  this.ui.startMc.startTitle.visible = true;
                  this.ui.startMc.visible = true;
                  if(this.storyId == -1)
                  {
                     this.ui.startMc.startIcon.gotoAndStop(1);
                     this.ui.startMc.startTitle.visible = false;
                     StatManager.sendStat2014("0607周年庆剧情：群星的复调","打开进入了周年庆序章","2024运营活动");
                  }
                  else
                  {
                     storyXML = A15thStoryInfo.getStoryXML(this.storyId);
                     if(Boolean(this.ui.startMc.startTitle.titleTxt))
                     {
                        this.ui.startMc.startTitle.titleTxt.text = storyXML.@Des;
                     }
                     if(Boolean(this.ui.startMc.startTitle.desTxt))
                     {
                        this.ui.startMc.startTitle.desTxt.text = storyXML.@Name;
                     }
                     this.ui.startMc.startTitle.alpha = 0;
                     TweenLite.to(this.ui.startMc.startTitle,0.4,{
                        "alpha":1,
                        "onComplete":function():void
                        {
                           TweenLite.to(ui.startMc.startTitle,0.9,{
                              "alpha":0.2,
                              "delay":0.9
                           });
                        }
                     });
                  }
                  this.requireClick = false;
               }
               else
               {
                  this.ui.endMc.visible = true;
                  fid = this.storyId;
                  this.ui.endMc.endIcon.gotoAndStop(fid == 5 ? 1 : 2);
                  SoundManager.stopSoundImmediately();
                  if(this.ui.endMc.endIcon.anim != null)
                  {
                     AnimateManager.playMcAnimateWithPromis(this.ui.endMc.endIcon.anim).then(function():void
                     {
                        endSocket();
                        SoundManager.stopSoundImmediately();
                        var mapId:uint = uint(MapManager.currentMap.id);
                        var soundId:String = MapXMLInfo.getBgSoundIdByMapId(MapManager.getResMapID(mapId));
                        SoundManager.playSoundById(soundId);
                     });
                  }
                  else
                  {
                     this.ui.endMc.endIcon.alpha = 0.1;
                     this.ui.endMc.endIcon.scaleY = 2;
                     this.ui.endMc.endIcon.scaleX = 2;
                     TweenLite.to(this.ui.endMc.endIcon,0.8,{
                        "scaleY":1,
                        "scaleX":1,
                        "alpha":1,
                        "onComplete":function():void
                        {
                           TweenLite.to(ui.endMc.endIcon,0.4,{
                              "scaleY":1.01,
                              "onComplete":function():void
                              {
                                 endSocket();
                                 SoundManager.stopSoundImmediately();
                                 var mapId:* = MapManager.currentMap.id;
                                 var soundId:* = MapXMLInfo.getBgSoundIdByMapId(MapManager.getResMapID(mapId));
                                 SoundManager.playSoundById(soundId);
                              }
                           });
                        }
                     });
                  }
                  this.requireClick = false;
               }
            }
            if(!this.requireClick && this.showType != "End")
            {
               this.animTimer.reset();
               this.animTimer.start();
            }
         }
      }
      
      private function onMouseClick(e:*) : void
      {
         if(this.requireClick)
         {
            this.hide();
         }
      }
      
      private function onAnimCompleted(e:TimerEvent = null) : void
      {
         this.hide();
      }
      
      private function endSocket() : void
      {
         if(this.showType == "End")
         {
            KTool.getMultiValue([105753],function(va:Array):void
            {
               var i:int;
               var recordID:int = int(va[0]);
               var curStoryID:int = 0;
               for(i = 1; i <= 5; i++)
               {
                  if(KTool.getBit(recordID,i) > 0)
                  {
                     curStoryID++;
                  }
               }
               curStoryID = storyId;
               if(!A15thStoryInfo.DebugAllow)
               {
                  if(curStoryID > 0)
                  {
                     SocketConnection.sendWithPromise(45850,[19,curStoryID]).then(function():void
                     {
                        if(backPanel != "")
                        {
                           ModuleManager.showAppModule(backPanel);
                        }
                        hide();
                     });
                  }
                  else
                  {
                     if(backPanel != "")
                     {
                        ModuleManager.showAppModule(backPanel);
                     }
                     hide();
                  }
               }
               else
               {
                  Alarm.show("忽略协议！！ " + curStoryID);
                  ModuleManager.showAppModule("A15thStoryOverview");
                  hide();
               }
            });
            this.showType = "";
         }
      }
      
      public function hide() : void
      {
         this.ui.visible = false;
         if(this.animTimer != null)
         {
            this.animTimer.stop();
         }
         EventManager.dispatchEvent(new Event("EndA15thTransition"));
      }
      
      public function destroy() : void
      {
         this.ui.visible = false;
         this.ui.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         if(this.animTimer != null)
         {
            this.animTimer.stop();
            this.animTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onAnimCompleted);
         }
         this.animTimer = null;
      }
   }
}

