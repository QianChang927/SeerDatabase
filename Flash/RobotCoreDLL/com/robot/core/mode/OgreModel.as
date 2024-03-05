package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MovesLangXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.OgreEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.manager.CursorManager;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MathUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class OgreModel extends ActionSpriteModel
   {
      
      public static var isShow:Boolean = true;
       
      
      private var _id:uint;
      
      private var _index:uint;
      
      private var _obj:MovieClip;
      
      private var _dialogTime:uint;
      
      private var nameTxt:TextField;
      
      private var tf:TextFormat;
      
      private var _isPurseFlag:Boolean = false;
      
      public var isAutoTalk:Boolean = true;
      
      public var isLoadToPanel:Boolean = false;
      
      public function OgreModel(param1:uint)
      {
         super();
         _speed = 2;
         this.mouseChildren = false;
         this._index = param1;
         this.tf = new TextFormat();
         this.tf.size = 12;
         this.tf.color = 16776960;
         this.nameTxt = new TextField();
         this.nameTxt.selectable = false;
         this.nameTxt.mouseEnabled = false;
         this.nameTxt.autoSize = TextFieldAutoSize.LEFT;
         this.nameTxt.defaultTextFormat = this.tf;
         this.nameTxt.filters = [new GlowFilter(0,1,1.5,1.5,10)];
      }
      
      override public function get width() : Number
      {
         if(this._obj)
         {
            return this._obj.width;
         }
         return super.width;
      }
      
      override public function get height() : Number
      {
         if(this._obj)
         {
            return this._obj.height;
         }
         return super.height;
      }
      
      public function get id() : uint
      {
         return this._id;
      }
      
      public function get index() : uint
      {
         return this._index;
      }
      
      override public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         if(this._obj)
         {
            this._obj.gotoAndStop(param1);
         }
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 10;
         return _centerPoint;
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - this.width / 2;
         _hitRect.y = y - this.height;
         _hitRect.width = this.width;
         _hitRect.height = this.height;
         return _hitRect;
      }
      
      public function get isPurseFlag() : Boolean
      {
         return this._isPurseFlag;
      }
      
      public function set isPurseFlag(param1:Boolean) : void
      {
         this._isPurseFlag = param1;
         if(this._isPurseFlag)
         {
            startPursueWalk(5000);
         }
         else
         {
            stopAutoWalk(true);
         }
      }
      
      public function show(param1:uint, param2:Point) : void
      {
         if(this._obj)
         {
            return;
         }
         this._id = param1;
         pos = param2;
         autoRect = new Rectangle(param2.x - 20,param2.y - 20,40,40);
         alpha = 0;
         this.nameTxt.visible = false;
         if(isShow)
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(this._id),this.onLoad,"pet");
         }
      }
      
      override public function destroy() : void
      {
         clearInterval(this._dialogTime);
         super.destroy();
         this.removeEventListener(MouseEvent.CLICK,this.onClick);
         if(this._obj != null)
         {
            this._obj.removeEventListener(MouseEvent.ROLL_OVER,this.onMouseOver);
            this._obj.removeEventListener(MouseEvent.ROLL_OUT,this.onMouseOut);
         }
         removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         removeEventListener(RobotEvent.WALK_END,this.onWalkOver);
         ResourceManager.cancel(ClientConfig.getPetSwfPath(this._id),this.onLoad);
         this.effect("Pet_Effect_Out");
         TweenLite.to(this,1,{
            "alpha":0,
            "ease":Back.easeOut,
            "onComplete":this.onFinishTween
         });
      }
      
      private function effect(param1:String) : void
      {
         var _loc2_:MovieClip = UIManager.getMovieClip(param1);
         MovieClipUtil.playEndAndRemove(_loc2_);
         addChild(_loc2_);
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         var _loc2_:Shape = null;
         if(MapManager.currentMap == null && !this.isLoadToPanel)
         {
            return;
         }
         this._obj = param1 as MovieClip;
         this._obj.scaleX = this._obj.scaleY = 0.9;
         this._obj.gotoAndStop(_direction);
         this.buttonMode = true;
         this.addEventListener(MouseEvent.CLICK,this.onClick);
         this._obj.addEventListener(MouseEvent.ROLL_OVER,this.onMouseOver);
         this._obj.addEventListener(MouseEvent.ROLL_OUT,this.onMouseOut);
         addChild(this._obj);
         this.effect("Pet_Effect_Over");
         if(!this.isLoadToPanel)
         {
            MapManager.currentMap.depthLevel.addChild(this);
         }
         TweenLite.to(this,1,{"alpha":1});
         if(this._isPurseFlag)
         {
            startPursueWalk(5000);
         }
         else
         {
            starAutoWalk(3000);
         }
         MovieClipUtil.childStop(this._obj,1);
         addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         addEventListener(RobotEvent.WALK_END,this.onWalkOver);
         if(this.isAutoTalk)
         {
            clearInterval(this._dialogTime);
            this._dialogTime = setInterval(this.onAutoDialog,MathUtil.randomHalfAdd(10000));
         }
         _loc2_ = new Shape();
         _loc2_.graphics.beginFill(0,0);
         _loc2_.graphics.drawRect(0,0,this.width,this.height);
         _loc2_.x = -this.width / 2;
         _loc2_.y = -this.height + 3;
         addChild(_loc2_);
         this.nameTxt.visible = true;
         this.nameTxt.text = PetXMLInfo.getName(this.id);
         this.nameTxt.x = -this.nameTxt.width / 2;
         this.nameTxt.y = 4;
         addChild(this.nameTxt);
      }
      
      private function onMouseOver(param1:Event) : void
      {
         var _loc2_:MovieClip = UIManager.getMovieClip("ogre_cursor");
         CursorManager.setCursor(_loc2_);
      }
      
      private function onMouseOut(param1:Event) : void
      {
         CursorManager.destroy();
      }
      
      private function onFinishTween() : void
      {
         DisplayUtil.removeForParent(this);
         this._obj = null;
      }
      
      private function onAutoDialog() : void
      {
         var _loc1_:String = MovesLangXMLInfo.getRandomLang(this._id);
         if(_loc1_ != "")
         {
            showBox(_loc1_);
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         EventManager.dispatchEvent(new OgreEvent(OgreEvent.CLICK_OGRE,this));
         dispatchEvent(new RobotEvent(RobotEvent.OGRE_CLICK));
      }
      
      private function onWalkStart(param1:Event) : void
      {
         var _loc2_:MovieClip = null;
         if(this._obj)
         {
            if(this._obj.numChildren > 0)
            {
               _loc2_ = this._obj.getChildAt(0) as MovieClip;
               if(_loc2_)
               {
                  if(_loc2_.currentFrame == 1)
                  {
                     _loc2_.gotoAndPlay(2);
                  }
               }
            }
         }
      }
      
      private function onWalkOver(param1:Event) : void
      {
         if(this._obj)
         {
            MovieClipUtil.childStop(this._obj,1);
         }
      }
   }
}
