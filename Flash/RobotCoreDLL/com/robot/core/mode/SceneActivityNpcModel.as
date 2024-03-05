package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SceneActivityNpcModel extends Sprite
   {
       
      
      protected var _direction:String;
      
      private var _id:int;
      
      private var nameTxt:TextField;
      
      private var tf:TextFormat;
      
      private var _obj:MovieClip;
      
      private var shape:Sprite;
      
      private var npctype:int;
      
      private var _mark:MovieClip;
      
      private var marktype:int = -1;
      
      public function SceneActivityNpcModel(param1:int)
      {
         this._direction = Direction.DOWN;
         super();
         this._id = param1;
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
      
      public function show() : void
      {
         ResourceManager.getResource(ClientConfig.getPetFightPath(this._id),this.onLoad,"pet");
         MapManager.currentMap.depthLevel.addChild(this);
      }
      
      public function setMark(param1:uint) : void
      {
         if(this._mark)
         {
            DisplayUtil.removeForParent(this._mark);
            this._mark = null;
         }
         this.marktype = param1;
         if(param1 == 1)
         {
            this._mark = UIManager.getMovieClip("lib_excalmatory_mark");
            if(this._obj)
            {
               this._mark.y = getBounds(this).y - 10;
               addChild(this._mark);
            }
         }
         else if(param1 == 2)
         {
            this._mark = UIManager.getMovieClip("lib_question_mark");
            if(this._obj)
            {
               this._mark.y = getBounds(this).y - 10;
               addChild(this._mark);
            }
         }
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         this._obj = param1 as MovieClip;
         this._obj.scaleX = this._obj.scaleY = 0.7;
         this.buttonMode = true;
         this.addEventListener(MouseEvent.CLICK,this.onClick);
         this._obj.y = -this._obj.height / 2;
         addChild(this._obj);
         var _loc2_:Rectangle = this._obj.getBounds(this);
         this.shape = new Sprite();
         this.shape.graphics.beginFill(0,0.001);
         this.shape.graphics.drawRect(0,0,_loc2_.width,_loc2_.height);
         this.shape.x = _loc2_.x;
         this.shape.y = _loc2_.y;
         addChild(this.shape);
         this.nameTxt.visible = true;
         this.nameTxt.text = PetXMLInfo.getName(this._id);
         this.nameTxt.x = -this.nameTxt.width / 2;
         this.nameTxt.y = 4;
         addChild(this.nameTxt);
         if(Boolean(this._mark) && !this._mark.parent)
         {
            this._mark.y = getBounds(this).y - 10;
            addChild(this._mark);
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
      }
      
      public function destroy() : void
      {
         if(this.parent)
         {
            this.parent.removeChild(this);
         }
         this.removeEventListener(MouseEvent.CLICK,this.onClick);
         if(this._obj)
         {
            if(this._obj.parent)
            {
               this._obj.parent.removeChild(this._obj);
            }
            this._obj = null;
         }
         ResourceManager.cancel(ClientConfig.getPetSwfPath(this._id),this.onLoad);
         if(this.nameTxt)
         {
            if(this.nameTxt.parent)
            {
               this.nameTxt.parent.removeChild(this.nameTxt);
            }
            this.nameTxt = null;
         }
         if(this.shape)
         {
            this.shape.graphics.clear();
            if(this.shape.parent)
            {
               this.shape.parent.removeChild(this.shape);
            }
            this.shape = null;
         }
         if(this._mark)
         {
            DisplayUtil.removeForParent(this._mark);
            this._mark = null;
         }
      }
   }
}
