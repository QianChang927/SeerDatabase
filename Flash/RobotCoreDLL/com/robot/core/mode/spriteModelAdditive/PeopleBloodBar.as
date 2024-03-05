package com.robot.core.mode.spriteModelAdditive
{
   import com.robot.core.mode.SpriteModel;
   import flash.display.Sprite;
   import flash.filters.GlowFilter;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.utils.DisplayUtil;
   
   public class PeopleBloodBar extends Sprite
   {
      
      public static const BLUE:uint = 0;
      
      public static const RED:uint = 1;
       
      
      private var bar:Sprite;
      
      private var barBg:Sprite;
      
      private var _hp:uint;
      
      private var _maxHp:uint;
      
      private var tf:TextFormat;
      
      private var _model:SpriteModel;
      
      private var new_HP_UI:Sprite;
      
      private var new_currentHP_MC:Sprite;
      
      private var new_currentHP_MC_W:Number;
      
      public function PeopleBloodBar()
      {
         super();
         this.barBg = new Sprite();
         this.barBg.graphics.lineStyle(1,0);
         this.barBg.graphics.beginFill(6710886,1);
         this.barBg.graphics.drawRect(0,0,50,6);
         this.bar = new Sprite();
         this.bar.graphics.beginFill(0,1);
         this.bar.graphics.drawRect(0,0,50,6);
         this.tf = new TextFormat();
         this.tf.size = 16;
         this.tf.font = "Tahoma";
         this.tf.color = 16711680;
         this.tf.bold = true;
      }
      
      public function destroy() : void
      {
         this._model = null;
      }
      
      public function set model(param1:SpriteModel) : void
      {
         this._model = param1;
      }
      
      public function get hp() : uint
      {
         return this._hp;
      }
      
      public function get maxHp() : uint
      {
         return this._maxHp;
      }
      
      public function set colorType(param1:uint) : void
      {
         if(param1 == BLUE)
         {
            DisplayUtil.FillColor(this.bar,3585535);
         }
         else
         {
            DisplayUtil.FillColor(this.bar,16719647);
         }
      }
      
      public function setHp(param1:uint, param2:uint, param3:uint = 0, param4:int = 0) : void
      {
         var p:Number;
         var txt:TextField = null;
         var t:uint = 0;
         var hp:uint = param1;
         var maxHp:uint = param2;
         var damage:uint = param3;
         var y:int = param4;
         this._hp = hp;
         this._maxHp = maxHp;
         this.y = y;
         p = hp / maxHp;
         this.bar.width = 50 * p;
         this.show();
         if(damage > 0)
         {
            txt = new TextField();
            txt.autoSize = TextFieldAutoSize.LEFT;
            txt.textColor = 16711680;
            txt.filters = [new GlowFilter(16777215,1,2,2,5)];
            txt.text = "-" + damage;
            txt.setTextFormat(this.tf);
            txt.x = -txt.width / 2;
            txt.y = -this._model.height;
            TweenLite.to(txt,0.5,{"y":txt.y - 20});
            this._model.addChild(txt);
            t = setTimeout(function():void
            {
               DisplayUtil.removeForParent(txt);
               clearTimeout(t);
            },2000);
         }
      }
      
      public function setHpNew(param1:uint, param2:uint, param3:int = 0) : void
      {
         var p:Number;
         var txt:TextField = null;
         var t1:uint = 0;
         var hp:uint = param1;
         var maxHp:uint = param2;
         var damage:int = param3;
         this._hp = hp;
         this._maxHp = maxHp;
         p = hp / maxHp;
         this.bar.width = 50 * p;
         this.show();
         if(damage != 0)
         {
            txt = new TextField();
            txt.autoSize = TextFieldAutoSize.LEFT;
            txt.textColor = 16711680;
            txt.filters = [new GlowFilter(16777215,1,2,2,5)];
            if(damage > 0)
            {
               txt.text = "-" + damage;
            }
            else
            {
               txt.text = "+" + Math.abs(damage);
            }
            txt.setTextFormat(this.tf);
            txt.x = -txt.width / 2;
            txt.y = -this._model.height;
            TweenLite.to(txt,0.5,{"y":txt.y - 20});
            this._model.addChild(txt);
            t1 = setTimeout(function():void
            {
               DisplayUtil.removeForParent(txt);
               clearTimeout(t1);
            },600);
         }
      }
      
      public function show() : void
      {
         this.barBg.x = this.bar.x = -this.barBg.width / 2;
         addChild(this.barBg);
         addChild(this.bar);
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this.barBg);
         DisplayUtil.removeForParent(this.bar);
      }
      
      public function setHPUI(param1:Sprite, param2:String = "") : void
      {
         this.new_HP_UI = param1;
         this.new_HP_UI.scaleX = this.new_HP_UI.scaleY = 0.3;
         this.new_HP_UI.x = -19;
         this.new_HP_UI.y = -12;
         addChild(this.new_HP_UI);
         this.new_currentHP_MC = this.new_HP_UI.getChildByName(param2) as Sprite;
         this.new_currentHP_MC_W = this.new_currentHP_MC.width;
      }
      
      public function setHPForNewUI(param1:uint, param2:uint) : void
      {
         this.new_currentHP_MC.scrollRect = new Rectangle(0,0,this.new_currentHP_MC_W * param1 / param2,this.new_currentHP_MC.height);
      }
      
      public function showNewHP() : void
      {
         this.new_HP_UI.visible = true;
      }
      
      public function hideNewHP() : void
      {
         this.new_HP_UI.visible = false;
         this.new_HP_UI = null;
         this.new_currentHP_MC = null;
         DisplayUtil.removeForParent(this.new_currentHP_MC);
      }
   }
}
