package com.robot.core.display.navigation
{
   import flash.display.*;
   import flash.events.*;
   import flash.geom.*;
   import gs.TweenLite;
   import gs.easing.Quart;
   
   public class Accordion extends MovieClip
   {
      
      public static const EVENT_ON_CHANGE:String = "change";
       
      
      private var mywidth:Number;
      
      private var myheight:Number;
      
      private var navW:Number;
      
      private var navH:Number;
      
      private var panelN:Number;
      
      private var panelW:Number;
      
      private var panelH:Number;
      
      private var panelWithBtnWidth:Number;
      
      private var panelWithBtnHeight:Number;
      
      public var currpanel:Number;
      
      private var vertical:Boolean;
      
      public function Accordion(param1:Number, param2:Number, param3:Number = 0, param4:Number = 0, param5:Number = 0, param6:Boolean = false)
      {
         super();
         this.vertical = param6;
         this.mywidth = param1;
         this.myheight = param2;
         this.panelN = param3;
         this.navW = param4;
         this.navH = param5;
         graphics.beginFill(16711680,0);
         graphics.drawRect(0,0,this.mywidth,this.myheight);
         graphics.endFill();
         this.panelW = param1 - param3 * param4;
         this.panelH = param2 - param3 * param5;
         this.panelWithBtnWidth = this.panelW + param4;
         this.panelWithBtnHeight = this.panelH + param5;
         var _loc7_:Sprite;
         (_loc7_ = new Sprite()).graphics.beginFill(16711680,0);
         _loc7_.graphics.drawRect(0,0,this.mywidth,this.myheight);
         _loc7_.graphics.endFill();
         addChild(_loc7_);
         mask = _loc7_;
      }
      
      public function doReady() : void
      {
         var _loc1_:Sprite = null;
         var _loc2_:uint = 0;
         var _loc4_:DisplayObject = null;
         var _loc3_:uint = 1;
         while(_loc3_ < this.numChildren)
         {
            (_loc4_ = this.getPanelContentsAt(_loc3_)).visible = false;
            _loc3_++;
         }
         _loc2_ = 1;
         while(_loc2_ < this.numChildren)
         {
            _loc1_ = this.getChildAt(_loc2_) as Sprite;
            (_loc1_.getChildByName("btn") as MovieClip).addEventListener(MouseEvent.CLICK,this.handleOpenClick);
            (_loc1_.getChildByName("btn") as MovieClip).buttonMode = true;
            _loc2_++;
         }
      }
      
      public function openPanel(param1:Number) : void
      {
         var _loc2_:Sprite = null;
         var _loc3_:uint = 0;
         var _loc5_:DisplayObject = null;
         var _loc4_:uint = 1;
         while(_loc4_ < this.numChildren)
         {
            (_loc5_ = this.getPanelContentsAt(_loc4_)).visible = false;
            _loc4_++;
         }
         TweenLite.to(this.getPanelContentsAt(param1),0.3,{"visible":true});
         _loc3_ = 1;
         while(_loc3_ < this.numChildren)
         {
            _loc2_ = this.getChildAt(_loc3_) as Sprite;
            (_loc2_.getChildByName("btn") as MovieClip).addEventListener(MouseEvent.CLICK,this.handleOpenClick);
            (_loc2_.getChildByName("btn") as MovieClip).buttonMode = true;
            _loc3_++;
         }
         _loc2_ = this.getChildAt(param1) as Sprite;
         (_loc2_.getChildByName("btn") as MovieClip).buttonMode = false;
         (_loc2_.getChildByName("btn") as MovieClip).removeEventListener(MouseEvent.CLICK,this.handleOpenClick);
         _loc3_ = param1 + 1;
         while(_loc3_ < this.numChildren)
         {
            _loc2_ = this.getChildAt(_loc3_) as Sprite;
            if(!this.vertical)
            {
               TweenLite.to(_loc2_,0.3,{
                  "x":this.mywidth - (this.numChildren - _loc3_) * this.navW,
                  "ease":Quart.easeOut
               });
            }
            else
            {
               TweenLite.to(_loc2_,0.3,{
                  "y":this.myheight - (this.numChildren - _loc3_) * this.navH,
                  "ease":Quart.easeOut
               });
            }
            _loc3_++;
         }
         _loc3_ = 1;
         while(_loc3_ <= param1)
         {
            _loc2_ = this.getChildAt(_loc3_) as Sprite;
            if(!this.vertical)
            {
               TweenLite.to(_loc2_,0.3,{
                  "x":(_loc3_ - 1) * this.navW,
                  "ease":Quart.easeOut
               });
            }
            else
            {
               TweenLite.to(_loc2_,0.3,{
                  "y":(_loc3_ - 1) * this.navH,
                  "ease":Quart.easeOut
               });
            }
            _loc3_++;
         }
         this.currpanel = param1;
         dispatchEvent(new Event(EVENT_ON_CHANGE));
      }
      
      public function addPanel(param1:MovieClip, param2:Sprite) : void
      {
         var _loc3_:Sprite = new Sprite();
         var _loc4_:Number = Math.round(Math.random() * 16777215);
         _loc3_.name = "test";
         _loc3_.graphics.beginFill(_loc4_,0);
         if(!this.vertical)
         {
            _loc3_.graphics.drawRect(0,0,this.panelWithBtnWidth,this.myheight);
         }
         else
         {
            _loc3_.graphics.drawRect(0,0,this.mywidth,this.panelWithBtnHeight);
         }
         _loc3_.graphics.endFill();
         var _loc5_:MovieClip = this.getBtnBase();
         var _loc6_:MovieClip = this.getBtnBase();
         _loc3_.addChild(param1);
         _loc3_.addChild(_loc5_);
         _loc5_.addChild(_loc6_);
         param1.mask = _loc6_;
         var _loc7_:Sprite;
         (_loc7_ = param2).name = "content";
         _loc3_.addChild(_loc7_);
         if(!this.vertical)
         {
            _loc7_.x += this.navW;
         }
         else
         {
            _loc7_.y += this.navH;
         }
         var _loc8_:MovieClip = this.getContentBase();
         _loc7_.addChild(_loc8_);
         _loc7_.mask = _loc8_;
         this.addChild(_loc3_);
         if(!this.vertical)
         {
            _loc3_.x = (this.numChildren - 2) * this.navW;
         }
         else
         {
            _loc3_.y = (this.numChildren - 2) * this.navH;
         }
         _loc5_.panelNumber = this.numChildren - 1;
         _loc5_.mouseChildren = false;
         _loc5_.buttonMode = true;
         _loc5_.name = "btn";
      }
      
      public function getPanelContentsAt(param1:uint) : DisplayObject
      {
         var _loc2_:Sprite = this.getChildAt(param1) as Sprite;
         return _loc2_.getChildByName("content");
      }
      
      private function handleOpenClick(param1:Event) : void
      {
         if(param1.target.panelNumber)
         {
            this.openPanel(param1.target.panelNumber);
         }
      }
      
      private function getBtnBase(param1:Number = 0) : MovieClip
      {
         var _loc2_:MovieClip = new MovieClip();
         var _loc3_:Number = Math.round(Math.random() * 16777215);
         _loc2_.graphics.beginFill(_loc3_,0);
         if(param1 > 0)
         {
            _loc2_.graphics.drawRect(0,0,param1,this.navH);
         }
         else if(!this.vertical)
         {
            _loc2_.graphics.drawRect(0,0,this.navW,this.myheight);
         }
         else
         {
            _loc2_.graphics.drawRect(0,0,this.mywidth,this.navH);
         }
         _loc2_.graphics.endFill();
         return _loc2_;
      }
      
      private function getContentBase() : MovieClip
      {
         var _loc1_:MovieClip = new MovieClip();
         var _loc2_:Number = Math.round(Math.random() * 16711680);
         _loc1_.graphics.beginFill(_loc2_,0.5);
         if(!this.vertical)
         {
            _loc1_.graphics.drawRect(0,0,this.panelW,this.myheight);
         }
         else
         {
            _loc1_.graphics.drawRect(0,0,this.mywidth,this.panelH);
         }
         _loc1_.graphics.endFill();
         return _loc1_;
      }
   }
}
