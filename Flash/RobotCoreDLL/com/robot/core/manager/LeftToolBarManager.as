package com.robot.core.manager
{
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.bean.BaseBean;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.utils.DisplayUtil;
   
   public class LeftToolBarManager extends BaseBean
   {
      
      private static var map:HashMap;
      
      private static var mc:MovieClip;
      
      private static var targetX:Number;
      
      private static var _iconMc:Sprite;
       
      
      private var btn:MovieClip;
      
      private var isShow:Boolean = false;
      
      public function LeftToolBarManager()
      {
         super();
      }
      
      public static function addIcon(param1:DisplayObject) : void
      {
         var _loc5_:DisplayObject = null;
         DebugTrace.show("addIcon-------->",param1.width,param1.height);
         if(map.getValue(param1) as DisplayObject)
         {
            return;
         }
         var _loc2_:uint = uint(map.length);
         map.add(param1,param1);
         var _loc3_:Array = map.getValues();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = _loc3_[_loc4_] as DisplayObject;
            _iconMc.addChild(_loc5_);
            _loc5_.x = 240 - 48 * _loc4_;
            _loc5_.y = 0;
            _loc4_++;
         }
         checkLengh();
      }
      
      public static function delIcon(param1:DisplayObject) : void
      {
         var _loc5_:DisplayObject = null;
         var _loc2_:DisplayObject = map.getValue(param1) as DisplayObject;
         DisplayUtil.removeForParent(_loc2_);
         map.remove(param1);
         var _loc3_:Array = map.getValues();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = _loc3_[_loc4_] as DisplayObject;
            _iconMc.addChild(_loc5_);
            _loc5_.x = 240 - 48 * _loc4_;
            _loc5_.y = 0;
            _loc4_++;
         }
         checkLengh();
      }
      
      private static function checkLengh() : void
      {
         targetX = -mc.width + 18 + map.length * 48;
         if(map.length > 0)
         {
            LevelManager.toolsLevel.addChild(mc);
         }
         else
         {
            DisplayUtil.removeForParent(mc);
         }
      }
      
      override public function start() : void
      {
         map = new HashMap();
         mc = new lib_left_toolBar();
         mc.x = -mc.width + 18;
         mc.y = 410;
         this.btn = mc["showOrHideBtn"];
         this.btn.buttonMode = true;
         this.btn.gotoAndStop(1);
         this.btn.addEventListener(MouseEvent.CLICK,this.clickHandler);
         _iconMc = mc["iconMc"];
         finish();
      }
      
      private function clickHandler(param1:MouseEvent) : void
      {
         this.isShow = !this.isShow;
         if(this.isShow)
         {
            this.btn.gotoAndStop(2);
            TweenLite.to(mc,0.3,{"x":targetX});
         }
         else
         {
            this.btn.gotoAndStop(1);
            TweenLite.to(mc,0.3,{"x":-mc.width + 18});
         }
      }
   }
}
