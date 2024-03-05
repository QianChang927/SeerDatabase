package com.robot.core.ui.alert
{
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.ui.alert.bagItemAlert.BaseItemAlert;
   import com.robot.core.ui.alert.bagItemAlert.SpecialItemAlert;
   import flash.display.DisplayObject;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class ItemInBagAlert
   {
      
      public static const SPECIAL_ALERT_ITEM_IDS:Array = [1400150];
      
      public static var openMouse:Boolean = true;
      
      private static var _alertQueue:Array = [];
      
      private static var _sprite:Sprite = new Sprite();
      
      private static var _isInAlerting:Boolean;
       
      
      public function ItemInBagAlert()
      {
         super();
      }
      
      private static function isExp(param1:uint) : Boolean
      {
         return param1 >= 400063 && param1 <= 400065;
      }
      
      public static function show(param1:uint, param2:String = "", param3:Function = null, param4:Boolean = false, param5:DisplayObject = null) : Sprite
      {
         _alertQueue.push([param1,param2,param3,param4,DisplayObject]);
         checkQueue();
         return _sprite;
      }
      
      private static function checkQueue() : void
      {
         var _loc1_:Array = null;
         if(_alertQueue.length >= 1 && !_isInAlerting)
         {
            _loc1_ = _alertQueue[0];
            showItem(_loc1_[0] as uint,_loc1_[1] as String,_loc1_[2] as Function,_loc1_[3] as Boolean);
         }
      }
      
      private static function removeItemFromQueue() : void
      {
         if(_alertQueue.length != 0)
         {
            _alertQueue.shift();
            _isInAlerting = false;
         }
      }
      
      private static function showItem(param1:uint, param2:String = "", param3:Function = null, param4:Boolean = false, param5:DisplayObject = null) : Sprite
      {
         var sprite:Sprite = null;
         var applyBtn:SimpleButton = null;
         var JSController:* = undefined;
         var onJSEvent:Function = null;
         var apply:Function = null;
         var id:uint = param1;
         var str:String = param2;
         var applyFun:Function = param3;
         var isMouse:Boolean = param4;
         var itemIcon:DisplayObject = param5;
         onJSEvent = function(param1:*):void
         {
            if(param1.command == "ok_btn")
            {
               apply(null);
            }
         };
         apply = function(param1:MouseEvent):void
         {
            if(openMouse)
            {
               LevelManager.openMouseEvent();
            }
            LevelManager.stage.stageFocusRect = false;
            LevelManager.stage.focus = LevelManager.stage;
            if(applyFun != null)
            {
               applyFun();
            }
            if(param1)
            {
               param1.currentTarget.removeEventListener(MouseEvent.CLICK,apply);
            }
            else
            {
               applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            }
            JSController.instance.removeEventListener("JS-EVENT",onJSEvent);
            DisplayUtil.removeForParent(sprite);
            removeItemFromQueue();
            checkQueue();
            EventManager.dispatchEvent(new DynamicEvent(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,{
               "id":id,
               "text":str
            }));
         };
         _isInAlerting = true;
         if(SPECIAL_ALERT_ITEM_IDS.indexOf(id) != -1 && false)
         {
            sprite = SpecialItemAlert.getAlertSprite(id,str);
         }
         else
         {
            sprite = BaseItemAlert.getAlertSprite(id,str);
         }
         sprite.addEventListener(Event.REMOVED_FROM_STAGE,function(param1:Event):void
         {
            param1.currentTarget.addEventListener(Event.REMOVED_FROM_STAGE,arguments.callee);
            _isInAlerting = false;
         });
         LevelManager.tipLevel.addChild(sprite);
         DisplayUtil.align(sprite,null,AlignType.MIDDLE_CENTER);
         if(!isMouse)
         {
            LevelManager.closeMouseEvent();
         }
         applyBtn = sprite["applyBtn"];
         if(applyBtn)
         {
            applyBtn.addEventListener(MouseEvent.CLICK,apply);
         }
         JSController = getDefinitionByName("com.robot.app2.control.jsControl.JSController");
         JSController.instance.addEventListener("JS-EVENT",onJSEvent);
         ItemManager.updateItems([id]);
         if(NewSeerTaskController.isNewSeer)
         {
            apply(null);
         }
         else if(id == 400063 && NewSeerTaskController.isNewSeer && !NewSeerTaskController.isNewSeerTaskADone2016)
         {
            apply(null);
         }
         return sprite;
      }
   }
}
