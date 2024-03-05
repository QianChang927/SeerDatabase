package com.robot.core.ui.alert
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.error.PromiseError;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFormatAlign;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class Alert
   {
      
      public static var type:uint = 0;
       
      
      public function Alert()
      {
         super();
      }
      
      public static function showWithPromise(param1:String, param2:Boolean = false) : Promise
      {
         var deferred:Deferred = null;
         var str:String = param1;
         var withTag:Boolean = param2;
         deferred = new Deferred();
         show(str,function():void
         {
            deferred.resolve(true);
         },function():void
         {
            deferred.reject(new PromiseError());
         },false);
         return deferred.promise;
      }
      
      public static function replace(param1:String) : String
      {
         return param1.replace(/夺宝精灵单价\*[0-9]+/,"夺宝精灵单价*1");
      }
      
      public static function show(param1:String, param2:Function = null, param3:Function = null, param4:Boolean = false) : Sprite
      {
         var bgmc:Sprite;
         var txt:TextField;
         var sprite:Sprite = null;
         var tagFlag:Boolean = false;
         var tagBtn:MovieClip = null;
         var applyBtn:SimpleButton = null;
         var cancelBtn:SimpleButton = null;
         var JSController:* = undefined;
         var onJSEvent:Function = null;
         var apply:Function = null;
         var cancel:Function = null;
         var onClickTag:Function = null;
         var onRemove:Function = null;
         var str:String = param1;
         var applyFun:Function = param2;
         var cancelFun:Function = param3;
         var withTag:Boolean = param4;
         onJSEvent = function(param1:*):void
         {
            if(param1.command == "ok_btn")
            {
               apply();
            }
            if(param1.command == "cancle_btn")
            {
               cancel();
            }
         };
         apply = function(param1:MouseEvent = null):void
         {
            openMouseEnabled();
            if(applyFun != null)
            {
               if(withTag)
               {
                  if(tagFlag)
                  {
                     SocketConnection.send(1022,86061689);
                  }
                  applyFun(tagFlag);
               }
               else
               {
                  applyFun();
               }
            }
            if(tagBtn)
            {
               tagBtn["btn"].removeEventListener(MouseEvent.CLICK,onClickTag);
            }
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            cancelBtn.removeEventListener(MouseEvent.CLICK,cancel);
            JSController.instance.removeEventListener("JS-EVENT",onJSEvent);
            sprite.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
            DisplayUtil.removeForParent(sprite);
            EventManager.dispatchEvent(new Event(Event.CLOSE));
            EventManager.dispatchEvent(new DynamicEvent("alertClick",str));
         };
         cancel = function(param1:MouseEvent = null):void
         {
            openMouseEnabled();
            if(cancelFun != null)
            {
               cancelFun();
            }
            if(tagBtn)
            {
               tagBtn["btn"].removeEventListener(MouseEvent.CLICK,onClickTag);
            }
            applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            cancelBtn.removeEventListener(MouseEvent.CLICK,cancel);
            JSController.instance.removeEventListener("JS-EVENT",onJSEvent);
            sprite.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
            DisplayUtil.removeForParent(sprite);
            EventManager.dispatchEvent(new Event(Event.CLOSE));
         };
         onClickTag = function(param1:MouseEvent):void
         {
            if(tagBtn["btn"]["flag"].currentFrame == 1)
            {
               sprite["tag"]["btn"]["flag"].gotoAndStop(2);
               tagFlag = true;
            }
            else
            {
               tagBtn["btn"]["flag"].gotoAndStop(1);
               tagFlag = false;
            }
         };
         onRemove = function(param1:Event):void
         {
            cancel(null);
         };
         str = replace(str);
         if(type == 1)
         {
            sprite = UIManager.getSprite("Batman_AlertMC");
         }
         else if(type == 2)
         {
            sprite = UIManager.getSprite("XTeam_AlertMC");
         }
         else
         {
            sprite = UIManager.getSprite("AlertMC");
            if(!withTag)
            {
               DisplayUtil.removeForParent(sprite["tag"]);
            }
            else
            {
               SocketConnection.send(1022,86061688);
            }
         }
         bgmc = sprite["bgMc"];
         bgmc.addEventListener(MouseEvent.MOUSE_DOWN,function():void
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            sprite.startDrag();
         });
         bgmc.addEventListener(MouseEvent.MOUSE_UP,function():void
         {
            sprite.stopDrag();
         });
         tagBtn = sprite["tag"];
         if(tagBtn)
         {
            tagBtn["btn"].buttonMode = true;
            tagBtn["btn"].addEventListener(MouseEvent.CLICK,onClickTag);
         }
         MainManager.getStage().addChild(sprite);
         DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         closeMouseEnabled();
         txt = sprite["txt"];
         txt.autoSize = TextFormatAlign.CENTER;
         txt.htmlText = str;
         txt.selectable = false;
         if(type == 0)
         {
            txt.width = 265;
            DisplayUtil.align(txt,new Rectangle(40,60,265,90),AlignType.MIDDLE_CENTER);
         }
         applyBtn = sprite["applyBtn"];
         cancelBtn = sprite["cancelBtn"];
         applyBtn.addEventListener(MouseEvent.CLICK,apply);
         cancelBtn.addEventListener(MouseEvent.CLICK,cancel);
         sprite.addEventListener(Event.REMOVED_FROM_STAGE,onRemove);
         JSController = getDefinitionByName("com.robot.app2.control.jsControl.JSController");
         JSController.instance.addEventListener("JS-EVENT",onJSEvent);
         return sprite;
      }
      
      private static function openMouseEnabled() : void
      {
         LevelManager.openMouseEvent();
         LevelManager.appLevel.mouseEnabled = true;
         LevelManager.appLevel.mouseChildren = true;
      }
      
      private static function closeMouseEnabled() : void
      {
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = false;
         LevelManager.appLevel.mouseChildren = false;
      }
   }
}
