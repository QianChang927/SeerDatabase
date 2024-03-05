package com.robot.core.utils
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.effect.ColorMatrix;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.filters.BitmapFilter;
   import flash.filters.ColorMatrixFilter;
   import flash.geom.ColorTransform;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFormat;
   import flash.utils.getQualifiedClassName;
   import org.taomee.effect.ColorFilter;
   
   public class CommonUI
   {
       
      
      public function CommonUI()
      {
         super();
      }
      
      public static function equalScale(param1:DisplayObject, param2:uint, param3:uint) : void
      {
         if(param1.width / param2 > param1.height / param3)
         {
            param1.scaleX = param1.scaleY = param2 / param1.width;
         }
         else
         {
            param1.scaleX = param1.scaleY = param3 / param1.height;
         }
      }
      
      public static function resetUiAllTxtFont(param1:MovieClip) : void
      {
         var _loc3_:DisplayObject = null;
         var _loc4_:TextField = null;
         var _loc5_:TextFormat = null;
         var _loc2_:int = 0;
         while(_loc2_ < param1.numChildren)
         {
            _loc3_ = param1.getChildAt(_loc2_);
            if(!(_loc3_ is SimpleButton))
            {
               if(_loc3_ is MovieClip)
               {
                  resetUiAllTxtFont(_loc3_ as MovieClip);
               }
               else if(_loc3_ is TextField)
               {
                  if((_loc5_ = (_loc4_ = _loc3_ as TextField).defaultTextFormat).font == "SimSun")
                  {
                     _loc5_.font = "_sans";
                     _loc5_.leading = 2;
                     (_loc3_ as TextField).defaultTextFormat = _loc5_;
                     (_loc3_ as TextField).setTextFormat(_loc5_);
                     _loc4_.height += 6;
                  }
               }
            }
            _loc2_++;
         }
      }
      
      public static function centerAlign(param1:DisplayObject, param2:Sprite, param3:Point) : void
      {
         var _loc6_:Number = NaN;
         var _loc4_:Rectangle;
         var _loc5_:Number = (_loc4_ = param1.getBounds(param2)).x - param1.x + param1.width / 2;
         _loc6_ = _loc4_.y - param1.y + param1.height / 2;
         param1.x = param3.x - _loc5_;
         param1.y = param3.y - _loc6_;
      }
      
      public static function getCenterPos(param1:DisplayObject, param2:Sprite) : Point
      {
         var _loc3_:Rectangle = param1.getBounds(param2);
         var _loc4_:Point;
         (_loc4_ = new Point()).x = _loc3_.x + param1.width / 2;
         _loc4_.y = _loc3_.y + param1.height / 2;
         return _loc4_;
      }
      
      public static function setEnabled(param1:InteractiveObject, param2:Boolean, param3:Boolean = true) : void
      {
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:BitmapFilter = null;
         var _loc4_:Sprite;
         if(_loc4_ = param1 as Sprite)
         {
            _loc4_.mouseEnabled = param2;
            _loc4_.mouseChildren = param2;
         }
         var _loc5_:SimpleButton;
         if(_loc5_ = param1 as SimpleButton)
         {
            _loc5_.enabled = param2;
            _loc5_.mouseEnabled = param2;
         }
         if(param3)
         {
            _loc7_ = int((_loc6_ = param1.filters).length - 1);
            while(_loc7_ >= 0)
            {
               if((_loc8_ = _loc6_[_loc7_]) is ColorMatrixFilter)
               {
                  _loc6_.splice(_loc7_,1);
               }
               _loc7_--;
            }
            if(param2 == false)
            {
               _loc6_.push(ColorFilter.setGrayscale());
            }
            param1.filters = _loc6_;
         }
         else
         {
            param1.filters = null;
         }
      }
      
      public static function setEnabled2(param1:InteractiveObject, param2:Boolean, param3:Boolean = false) : void
      {
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:BitmapFilter = null;
         var _loc4_:Sprite;
         if(_loc4_ = param1 as Sprite)
         {
            _loc4_.mouseEnabled = param2;
            _loc4_.mouseChildren = param2;
         }
         var _loc5_:SimpleButton;
         if(_loc5_ = param1 as SimpleButton)
         {
            _loc5_.enabled = param2;
            _loc5_.mouseEnabled = param2;
         }
         if(param3)
         {
            _loc7_ = int((_loc6_ = param1.filters).length - 1);
            while(_loc7_ >= 0)
            {
               if((_loc8_ = _loc6_[_loc7_]) is ColorMatrixFilter)
               {
                  _loc6_.splice(_loc7_,1);
               }
               _loc7_--;
            }
            _loc6_.push(ColorFilter.setGrayscale());
            param1.filters = _loc6_;
         }
         else
         {
            param1.filters = null;
         }
      }
      
      public static function removeGrayMask(param1:DisplayObjectContainer) : void
      {
         param1.filters = [];
         var _loc2_:DisplayObject = param1.getChildByName("graySp");
         if(_loc2_)
         {
            param1.removeChild(_loc2_);
         }
         _loc2_ = null;
      }
      
      public static function addGrayMask(param1:DisplayObjectContainer) : void
      {
         var _loc2_:Rectangle = param1.getBounds(param1);
         var _loc3_:Shape = new Shape();
         _loc3_.graphics.beginFill(1193300,0.5);
         _loc3_.graphics.drawRect(_loc2_.x,_loc2_.y,_loc2_.width,_loc2_.height);
         _loc3_.graphics.endFill();
         _loc3_.name = "graySp";
         var _loc4_:ColorMatrix;
         (_loc4_ = new ColorMatrix()).adjustColor(20,0,-100,0);
         param1.filters = [new ColorMatrixFilter(_loc4_.colorMatrixArr)];
         param1.addChild(_loc3_);
      }
      
      public static function setBrightness(param1:DisplayObject, param2:Number) : void
      {
         var _loc3_:ColorTransform = param1.transform.colorTransform;
         var _loc4_:* = param1.filters;
         if(param2 >= 0)
         {
            _loc3_.blueMultiplier = 1 - param2;
            _loc3_.redMultiplier = 1 - param2;
            _loc3_.greenMultiplier = 1 - param2;
            _loc3_.redOffset = 255 * param2;
            _loc3_.greenOffset = 255 * param2;
            _loc3_.blueOffset = 255 * param2;
         }
         else
         {
            param2 = Math.abs(param2);
            _loc3_.blueMultiplier = 1 - param2;
            _loc3_.redMultiplier = 1 - param2;
            _loc3_.greenMultiplier = 1 - param2;
            _loc3_.redOffset = 0;
            _loc3_.greenOffset = 0;
            _loc3_.blueOffset = 0;
         }
         param1.transform.colorTransform = _loc3_;
         param1.filters = _loc4_;
      }
      
      public static function addYellowExcal(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = -80, param4:Number = 1) : void
      {
         var _loc5_:MovieClip;
         (_loc5_ = UIManager.getMovieClip("lib_excalmatory_mark")).x = param2;
         _loc5_.y = param3;
         _loc5_.scaleX = _loc5_.scaleY = param4;
         param1.addChild(_loc5_);
      }
      
      public static function removeYellowExcal(param1:DisplayObjectContainer) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:String = null;
         if(param1)
         {
            _loc2_ = 0;
            while(_loc2_ < param1.numChildren)
            {
               _loc3_ = getQualifiedClassName(param1.getChildAt(_loc2_));
               _loc4_ = _loc3_.split(".");
               if((_loc5_ = String(_loc4_[_loc4_.length - 1])) == "lib_excalmatory_mark")
               {
                  param1.removeChild(param1.getChildAt(_loc2_));
                  break;
               }
               _loc2_++;
            }
         }
      }
      
      public static function addYellowQuestion(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = -80) : void
      {
         var _loc4_:MovieClip;
         (_loc4_ = UIManager.getMovieClip("lib_question_mark")).x = param2;
         _loc4_.y = param3;
         param1.addChild(_loc4_);
      }
      
      public static function removeYellowQuestion(param1:DisplayObjectContainer) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:String = null;
         if(param1)
         {
            _loc2_ = 0;
            while(_loc2_ < param1.numChildren)
            {
               _loc3_ = getQualifiedClassName(param1.getChildAt(_loc2_));
               _loc4_ = _loc3_.split(".");
               if((_loc5_ = String(_loc4_[_loc4_.length - 1])) == "lib_question_mark")
               {
                  param1.removeChild(param1.getChildAt(_loc2_));
                  break;
               }
               _loc2_++;
            }
         }
      }
      
      public static function addYellowArrowForMapObject(param1:String, param2:String = "depthLevel") : void
      {
         var _loc7_:Point = null;
         var _loc3_:DisplayObject = MapManager.currentMap[param2].getChildByName(param1);
         var _loc4_:Number = 0;
         var _loc5_:int = _loc3_.x;
         var _loc6_:int = _loc3_.y - _loc3_.height;
         if(_loc3_ != null)
         {
            if((_loc7_ = LevelManager.stage.localToGlobal(new Point(_loc3_.x,_loc3_.y))).x > 800)
            {
               _loc5_ = _loc3_.x - _loc3_.width / 2;
               _loc6_ = _loc3_.y - _loc3_.height / 2;
               _loc4_ = 270;
            }
            if(_loc7_.y < 150)
            {
               _loc5_ = _loc3_.x;
               _loc6_ = _loc3_.y + _loc3_.height;
               _loc4_ = 180;
            }
            addYellowArrow(MapManager.currentMap.depthLevel,_loc5_,_loc6_,_loc4_);
         }
      }
      
      public static function removeYellowArrowForMapObject() : void
      {
         removeYellowArrow(MapManager.currentMap.depthLevel);
      }
      
      public static function addYellowArrow(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = 0, param4:int = 0) : MovieClip
      {
         var _loc5_:MovieClip;
         (_loc5_ = UIManager.getMovieClip("Arrows_UI")).x = param2;
         _loc5_.y = param3;
         _loc5_.rotation = param4;
         param1.addChild(_loc5_);
         return _loc5_;
      }
      
      public static function removeYellowArrow(param1:DisplayObjectContainer) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:String = null;
         if(param1)
         {
            _loc2_ = 0;
            while(_loc2_ < param1.numChildren)
            {
               _loc3_ = getQualifiedClassName(param1.getChildAt(_loc2_));
               _loc4_ = _loc3_.split(".");
               if((_loc5_ = String(_loc4_[_loc4_.length - 1])) == "Arrows_UI")
               {
                  param1.removeChild(param1.getChildAt(_loc2_));
                  break;
               }
               _loc2_++;
            }
         }
      }
      
      public static function showProgressBar(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = 0, param4:Function = null, param5:String = "正在采集") : void
      {
         var progressBar:MovieClip = null;
         var container:DisplayObjectContainer = param1;
         var offX:Number = param2;
         var offY:Number = param3;
         var fun:Function = param4;
         var txt:String = param5;
         progressBar = UIManager.getMovieClip("lib_progress_Bar");
         progressBar.x = offX;
         progressBar.y = offY;
         progressBar["txt"].text = txt;
         container.addChild(progressBar);
         AnimateManager.playMcAnimate(progressBar,0,"",function():void
         {
            container.removeChild(progressBar);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function getVisibility(param1:DisplayObject, param2:Sprite = null) : Rectangle
      {
         var _loc3_:Rectangle = null;
         if(param2 == null)
         {
            param2 = param1.parent as Sprite;
         }
         if(param2 == null)
         {
            return new Rectangle();
         }
         if(param1 is DisplayObjectContainer)
         {
            _loc3_ = getChildVisibility(param1,param2);
         }
         else
         {
            _loc3_ = param1.getBounds(param2);
         }
         if(param1.mask != null)
         {
            _loc3_ = _loc3_.intersection(param1.mask.getBounds(param2));
         }
         return _loc3_;
      }
      
      public static function getChildVisibility(param1:*, param2:DisplayObjectContainer) : Rectangle
      {
         var _loc4_:DisplayObject = null;
         var _loc5_:Rectangle = null;
         var _loc6_:uint = 0;
         var _loc3_:Rectangle = new Rectangle();
         _loc6_ = 1;
         while(_loc6_ <= param1.numChildren)
         {
            if((_loc4_ = param1.getChildAt(_loc6_ - 1)) != null)
            {
               if(_loc4_.visible)
               {
                  if(_loc4_ is DisplayObjectContainer)
                  {
                     _loc5_ = getChildVisibility(_loc4_,param2);
                  }
                  else
                  {
                     _loc5_ = _loc4_.getBounds(param2);
                  }
                  if(_loc4_.mask != null)
                  {
                     _loc5_ = _loc5_.intersection(_loc4_.mask.getBounds(param2));
                  }
                  _loc3_ = _loc3_.union(_loc5_);
               }
            }
            _loc6_++;
         }
         return _loc3_;
      }
   }
}
