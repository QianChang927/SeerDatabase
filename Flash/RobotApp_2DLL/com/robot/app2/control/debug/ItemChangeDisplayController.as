package com.robot.app2.control.debug
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.system.System;
   import flash.text.TextField;
   import flash.text.TextFormat;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class ItemChangeDisplayController
   {
      
      private static var _txt:TextField;
      
      private static var _fpsTxt:TextField;
      
      private static var _fps:int;
      
      private static var _coin:int;
      
      private static var _diamond:int;
       
      
      public function ItemChangeDisplayController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.beginFill(0,0.5);
         _loc1_.graphics.drawRect(0,0,400,20);
         _loc1_.graphics.endFill();
         MainManager.getStage().addChild(_loc1_);
         _txt = new TextField();
         _txt.width = 200;
         _txt.height = 20;
         _txt.selectable = false;
         var _loc2_:TextFormat = new TextFormat("arial",10,16777215);
         _txt.defaultTextFormat = _loc2_;
         _loc1_.addChild(_txt);
         _coin = MainManager.actorInfo.coins;
         onDiamondChange(null);
         _fpsTxt = new TextField();
         _fpsTxt.defaultTextFormat = _loc2_;
         _fpsTxt.x = 200;
         _fpsTxt.height = 20;
         _fpsTxt.width = 200;
         _fpsTxt.selectable = false;
         _loc1_.addChild(_fpsTxt);
         EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT,onCoinChange);
         EventManager.addEventListener(RobotEvent.MONEY_BUY,onDiamondChange);
         EventManager.addEventListener(RobotEvent.DIAMOND_BUY,onDiamondChange);
         _fps = 0;
         SystemTimerManager.addTickFun(onTimer);
         _loc1_.addEventListener(Event.ENTER_FRAME,onEnterFrame);
      }
      
      private static function onTimer() : void
      {
         var _loc1_:int = System.totalMemory / (1024 * 1024);
         _fpsTxt.htmlText = "当前帧率：<font color=\'#ffff00\'>" + _fps + "</font>, 当前内存：<font color=\'#ffff00\'>" + _loc1_ + "MiB</font>";
         _fps = 0;
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         ++_fps;
      }
      
      private static function onDiamondChange(param1:*) : void
      {
         var e:* = param1;
         SocketConnection.sendWithCallback(CommandID.GOLD_CHECK_REMAIN,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data;
            _loc2_.position = 0;
            _diamond = _loc2_.readUnsignedInt() / 100;
            update();
         });
      }
      
      private static function onCoinChange(param1:DynamicEvent) : void
      {
         var id:int = 0;
         var e:DynamicEvent = param1;
         id = int(setTimeout(function():void
         {
            clearTimeout(id);
            _coin = MainManager.actorInfo.coins;
            update();
         },100));
      }
      
      private static function update() : void
      {
         _txt.htmlText = "赛尔豆：<font color=\'#ffff00\'>" + _coin + "</font>, 钻石：<font color=\'#ffff00\'>" + _diamond + "</font>";
      }
   }
}
