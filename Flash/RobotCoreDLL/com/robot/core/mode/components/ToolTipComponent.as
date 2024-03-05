package com.robot.core.mode.components
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import org.taomee.ds.HashSet;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class ToolTipComponent implements IComponent
   {
       
      
      private var _tipObjs:HashSet;
      
      private var _specialObjs:HashSet;
      
      private var specialMc:MovieClip;
      
      private var specialMc1:MovieClip;
      
      private var tips:String;
      
      private var tagsArr:Array;
      
      private var dessArr:Array;
      
      private var labels:int;
      
      private var offValue:int = 30;
      
      private var offValue1:int = 40;
      
      private var onLoad:Boolean = false;
      
      public function ToolTipComponent()
      {
         this.tagsArr = [];
         this.dessArr = [];
         super();
      }
      
      public function addTip(param1:InteractiveObject, param2:String) : void
      {
         ToolTipManager.add(param1,param2);
         if(null == this._tipObjs)
         {
            this._tipObjs = new HashSet();
         }
         this._tipObjs.add(param1);
      }
      
      public function addSpecialTip(param1:InteractiveObject, param2:String, param3:int = 0, param4:Array = null, param5:Array = null) : void
      {
         if(null == this._specialObjs)
         {
            this._specialObjs = new HashSet();
         }
         this._specialObjs.add(param1);
         this.tips = param2;
         this.labels = param3;
         this.tagsArr = param4;
         this.dessArr = param5;
         if(!param1.hasEventListener(MouseEvent.MOUSE_OVER))
         {
            param1.addEventListener(MouseEvent.MOUSE_OVER,this.overHandler);
         }
         if(!param1.hasEventListener(MouseEvent.MOUSE_OUT))
         {
            param1.addEventListener(MouseEvent.MOUSE_OUT,this.outHandler);
         }
      }
      
      private function overHandler(param1:MouseEvent) : void
      {
         var opoint:Point = null;
         var point:Point = null;
         var e:MouseEvent = param1;
         if(this.labels <= 0)
         {
            if(this.onLoad)
            {
               return;
            }
            if(this.specialMc != null)
            {
               LevelManager.appLevel.addChild(this.specialMc);
               opoint = new Point(e.stageX,e.stageY);
               point = this.specialMc.parent.globalToLocal(opoint);
               this.specialMc.x = point.x + 5;
               this.specialMc.y = point.y + 10;
               this.specialMc.gotoAndStop(7);
               this.setText();
            }
            else
            {
               this.onLoad = true;
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip"),function(param1:MovieClip):void
               {
                  onLoad = false;
                  specialMc = param1;
                  LevelManager.appLevel.addChild(specialMc);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc.parent.globalToLocal(_loc2_);
                  specialMc.x = _loc3_.x + 5;
                  specialMc.y = _loc3_.y + 10;
                  setText();
               });
            }
         }
         else
         {
            if(this.onLoad)
            {
               return;
            }
            this.onLoad = true;
            if(this.specialMc1)
            {
               if(this.specialMc1.parent)
               {
                  this.specialMc1.parent.removeChild(this.specialMc1);
               }
            }
            if(this.labels == 2)
            {
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip1"),function(param1:MovieClip):void
               {
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 50;
                  specialMc1.y = _loc3_.y + 10;
                  setText1();
               });
            }
            else if(this.labels == 3)
            {
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip2"),function(param1:MovieClip):void
               {
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 50;
                  specialMc1.y = _loc3_.y + 10;
                  setText2();
               });
            }
            else if(this.labels == 4)
            {
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip3"),function(param1:MovieClip):void
               {
                  var _loc3_:Point = null;
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  _loc3_ = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 50;
                  specialMc1.y = _loc3_.y + 10;
                  setText3();
               });
            }
            else if(this.labels == 100)
            {
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip5"),function(param1:MovieClip):void
               {
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 350;
                  specialMc1.y = _loc3_.y;
               });
            }
            else if(this.labels == 101)
            {
               this.specialMc1 = null;
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip6"),function(param1:MovieClip):void
               {
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 350;
                  specialMc1.y = _loc3_.y;
               });
            }
            else if(this.labels == 102)
            {
               this.specialMc1 = null;
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip7"),function(param1:MovieClip):void
               {
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 350;
                  specialMc1.y = _loc3_.y;
               });
            }
            else if(this.labels == 103)
            {
               this.specialMc1 = null;
               ResourceManager.getResource(ClientConfig.getAppResource("system/petBag/tip8"),function(param1:MovieClip):void
               {
                  specialMc1 = param1;
                  if(specialMc1.parent)
                  {
                     specialMc1.parent.removeChild(specialMc1);
                  }
                  onLoad = false;
                  LevelManager.appLevel.addChild(specialMc1);
                  var _loc2_:Point = new Point(e.stageX,e.stageY);
                  var _loc3_:Point = specialMc1.parent.globalToLocal(_loc2_);
                  specialMc1.x = _loc3_.x - 350;
                  specialMc1.y = _loc3_.y;
               });
            }
         }
      }
      
      private function setText() : void
      {
         var _loc1_:TextField = null;
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         if(!this.specialMc || !this.specialMc["txt"] || !this.specialMc["mc"])
         {
            return;
         }
         _loc1_ = this.specialMc["txt"];
         _loc1_.wordWrap = true;
         _loc1_.selectable = false;
         _loc1_.text = this.tips;
         _loc3_ = this.specialMc["mc"].width / this.specialMc["mc"].height;
         _loc4_ = this.tips.split("\n");
         _loc5_ = 0;
         var _loc6_:int = 1;
         while(_loc6_ <= _loc4_.length)
         {
            _loc5_ += Math.ceil(Math.sqrt(_loc4_[_loc6_ - 1].length / _loc3_));
            _loc6_++;
         }
         _loc1_.height = _loc5_ * (_loc1_.getLineMetrics(0).height - _loc1_.getLineMetrics(0).descent);
         _loc1_.width = _loc1_.height * _loc3_;
         _loc1_.x = this.specialMc["mc"].x + this.offValue / 2;
         _loc1_.y = this.specialMc["mc"].y + this.offValue / 2;
         _loc3_ = (_loc1_.width + this.offValue) / (this.specialMc["mc"].width / this.specialMc["mc"].scaleX);
         _loc2_ = (_loc1_.height + this.offValue) / (this.specialMc["mc"].height / this.specialMc["mc"].scaleY);
         if(_loc3_ > _loc2_)
         {
            _loc2_ = _loc3_;
         }
         this.specialMc["mc"].scaleX = this.specialMc["mc"].scaleY = _loc2_;
      }
      
      private function setText1() : void
      {
         var _loc1_:TextField = null;
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:TextField = null;
         var _loc9_:TextField = null;
         var _loc10_:TextField = null;
         var _loc11_:MovieClip = null;
         if(!this.specialMc1 || !this.specialMc1["txt"] || !this.specialMc1["mc"])
         {
            return;
         }
         _loc1_ = this.specialMc1["txt"];
         _loc8_ = this.specialMc1["txt1"];
         _loc9_ = this.specialMc1["txt_2"];
         _loc10_ = this.specialMc1["txt_1"];
         _loc11_ = this.specialMc1["tag2"];
         _loc1_.wordWrap = true;
         _loc1_.selectable = false;
         _loc1_.text = this.dessArr[0].split("|").join("\r");
         _loc10_.wordWrap = true;
         _loc10_.selectable = false;
         _loc10_.text = this.dessArr[1].split("|").join("\r");
         _loc8_.text = this.tagsArr[0];
         _loc9_.text = this.tagsArr[1];
         _loc3_ = this.specialMc1["mc"].width / this.specialMc1["mc"].height;
         _loc4_ = this.dessArr[0].split("\n");
         _loc5_ = this.dessArr[1].split("\n");
         _loc6_ = 0;
         _loc7_ = 0;
         var _loc12_:int = 1;
         while(_loc12_ <= _loc4_.length)
         {
            _loc6_ += Math.ceil(Math.sqrt(_loc4_[_loc12_ - 1].length / _loc3_));
            _loc12_++;
         }
         var _loc13_:int = 1;
         while(_loc13_ <= _loc5_.length)
         {
            _loc7_ += Math.ceil(Math.sqrt(_loc5_[_loc13_ - 1].length / _loc3_));
            _loc13_++;
         }
         _loc1_.height = (_loc6_ - 3) * (_loc1_.getTextFormat().size + 3.5);
         _loc10_.height = _loc7_ * (_loc10_.getLineMetrics(0).height - _loc10_.getLineMetrics(0).descent);
         _loc11_.y = _loc1_.y + _loc1_.height;
         _loc9_.y = _loc11_.y + 5;
         _loc10_.y = _loc11_.y + 36;
         _loc3_ = (_loc1_.width + this.offValue1) / (this.specialMc1["mc"].width / this.specialMc1["mc"].scaleX);
         _loc2_ = (_loc10_.y + _loc10_.height) / (this.specialMc1["mc"].height / this.specialMc1["mc"].scaleY);
         this.specialMc1["mc"].height = _loc10_.y + _loc10_.height - 30;
      }
      
      private function setText2() : void
      {
         var _loc1_:TextField = null;
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:TextField = null;
         var _loc11_:TextField = null;
         var _loc12_:TextField = null;
         var _loc13_:MovieClip = null;
         var _loc14_:TextField = null;
         var _loc15_:TextField = null;
         var _loc16_:MovieClip = null;
         if(!this.specialMc1 || !this.specialMc1["txt"] || !this.specialMc1["mc"])
         {
            return;
         }
         _loc1_ = this.specialMc1["txt"];
         _loc10_ = this.specialMc1["txt1"];
         _loc11_ = this.specialMc1["txt_2"];
         _loc12_ = this.specialMc1["txt_1"];
         _loc14_ = this.specialMc1["txt_4"];
         _loc15_ = this.specialMc1["txt_3"];
         _loc13_ = this.specialMc1["tag2"];
         _loc16_ = this.specialMc1["tag3"];
         _loc1_.wordWrap = true;
         _loc1_.selectable = false;
         _loc1_.text = this.dessArr[0].split("|").join("\r");
         _loc12_.wordWrap = true;
         _loc12_.selectable = false;
         _loc14_.wordWrap = true;
         _loc14_.selectable = false;
         _loc12_.text = this.dessArr[1].split("|").join("\r");
         _loc14_.text = this.dessArr[2].split("|").join("\r");
         _loc10_.text = this.tagsArr[0];
         _loc11_.text = this.tagsArr[1];
         _loc15_.text = this.tagsArr[2];
         _loc3_ = this.specialMc1["mc"].width / this.specialMc1["mc"].height;
         _loc4_ = this.dessArr[0].split("\n");
         _loc5_ = this.dessArr[1].split("\n");
         _loc6_ = this.dessArr[2].split("\n");
         _loc7_ = 0;
         _loc8_ = 0;
         _loc9_ = 0;
         var _loc17_:int = 1;
         while(_loc17_ <= _loc4_.length)
         {
            _loc7_ += Math.ceil(Math.sqrt(_loc4_[_loc17_ - 1].length / _loc3_));
            _loc17_++;
         }
         var _loc18_:int = 1;
         while(_loc18_ <= _loc5_.length)
         {
            _loc8_ += Math.ceil(Math.sqrt(_loc5_[_loc18_ - 1].length / _loc3_));
            _loc18_++;
         }
         var _loc19_:int = 1;
         while(_loc19_ <= _loc6_.length)
         {
            _loc9_ += Math.ceil(Math.sqrt(_loc6_[_loc19_ - 1].length / _loc3_));
            _loc19_++;
         }
         _loc1_.height = (_loc7_ - 3) * (_loc1_.getTextFormat().size + 3.5);
         _loc12_.height = (_loc8_ - 3) * (_loc12_.getTextFormat().size + 3.5);
         _loc14_.height = _loc9_ * (_loc14_.getLineMetrics(0).height - _loc14_.getLineMetrics(0).descent);
         _loc13_.y = _loc1_.y + _loc1_.height;
         _loc11_.y = _loc13_.y + 5;
         _loc12_.y = _loc13_.y + 36;
         _loc16_.y = _loc12_.y + _loc12_.height;
         _loc15_.y = _loc16_.y + 5;
         _loc14_.y = _loc16_.y + 36;
         _loc3_ = (_loc1_.width + this.offValue1) / (this.specialMc1["mc"].width / this.specialMc1["mc"].scaleX);
         _loc2_ = (_loc12_.y + _loc12_.height) / (this.specialMc1["mc"].height / this.specialMc1["mc"].scaleY);
         this.specialMc1["mc"].height = _loc14_.y + _loc14_.height - 30;
      }
      
      private function setText3() : void
      {
         var _loc1_:TextField = null;
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         var _loc12_:TextField = null;
         var _loc13_:TextField = null;
         var _loc14_:TextField = null;
         var _loc15_:MovieClip = null;
         var _loc16_:TextField = null;
         var _loc17_:TextField = null;
         var _loc18_:MovieClip = null;
         var _loc19_:TextField = null;
         var _loc20_:TextField = null;
         var _loc21_:MovieClip = null;
         if(!this.specialMc1 || !this.specialMc1["txt"] || !this.specialMc1["mc"])
         {
            return;
         }
         _loc1_ = this.specialMc1["txt"];
         _loc12_ = this.specialMc1["txt1"];
         _loc13_ = this.specialMc1["txt_2"];
         _loc14_ = this.specialMc1["txt_1"];
         _loc16_ = this.specialMc1["txt_4"];
         _loc17_ = this.specialMc1["txt_3"];
         _loc19_ = this.specialMc1["txt_6"];
         _loc20_ = this.specialMc1["txt_5"];
         _loc15_ = this.specialMc1["tag2"];
         _loc18_ = this.specialMc1["tag3"];
         _loc21_ = this.specialMc1["tag4"];
         _loc1_.wordWrap = true;
         _loc1_.selectable = false;
         _loc1_.text = this.dessArr[0].split("|").join("\r");
         _loc14_.wordWrap = true;
         _loc14_.selectable = false;
         _loc16_.wordWrap = true;
         _loc16_.selectable = false;
         _loc19_.wordWrap = true;
         _loc19_.selectable = false;
         _loc14_.text = this.dessArr[1].split("|").join("\r");
         _loc16_.text = this.dessArr[2].split("|").join("\r");
         _loc19_.text = this.dessArr[3].split("|").join("\r");
         _loc12_.text = this.tagsArr[0];
         _loc13_.text = this.tagsArr[1];
         _loc17_.text = this.tagsArr[2];
         _loc20_.text = this.tagsArr[3];
         _loc3_ = this.specialMc1["mc"].width / this.specialMc1["mc"].height;
         _loc4_ = this.dessArr[0].split("\n");
         _loc5_ = this.dessArr[1].split("\n");
         _loc6_ = this.dessArr[2].split("\n");
         _loc7_ = this.dessArr[3].split("\n");
         _loc8_ = 0;
         _loc9_ = 0;
         _loc10_ = 0;
         _loc11_ = 0;
         var _loc22_:int = 1;
         while(_loc22_ <= _loc4_.length)
         {
            _loc8_ += Math.ceil(Math.sqrt(_loc4_[_loc22_ - 1].length / _loc3_));
            _loc22_++;
         }
         var _loc23_:int = 1;
         while(_loc23_ <= _loc5_.length)
         {
            _loc9_ += Math.ceil(Math.sqrt(_loc5_[_loc23_ - 1].length / _loc3_));
            _loc23_++;
         }
         var _loc24_:int = 1;
         while(_loc24_ <= _loc6_.length)
         {
            _loc10_ += Math.ceil(Math.sqrt(_loc6_[_loc24_ - 1].length / _loc3_));
            _loc24_++;
         }
         var _loc25_:int = 1;
         while(_loc25_ <= _loc7_.length)
         {
            _loc11_ += Math.ceil(Math.sqrt(_loc7_[_loc25_ - 1].length / _loc3_));
            _loc25_++;
         }
         _loc1_.height = (_loc8_ - 3) * (_loc1_.getTextFormat().size + 3.5);
         _loc14_.height = (_loc9_ - 3) * (_loc14_.getTextFormat().size + 3.5);
         _loc16_.height = (_loc10_ - 3) * (_loc16_.getTextFormat().size + 3.5);
         _loc19_.height = _loc11_ * (_loc19_.getLineMetrics(0).height - _loc19_.getLineMetrics(0).descent);
         _loc15_.y = _loc1_.y + _loc1_.height;
         _loc13_.y = _loc15_.y + 5;
         _loc14_.y = _loc15_.y + 36;
         _loc18_.y = _loc14_.y + _loc14_.height;
         _loc17_.y = _loc18_.y + 5;
         _loc16_.y = _loc18_.y + 36;
         _loc21_.y = _loc16_.y + _loc16_.height;
         _loc20_.y = _loc21_.y + 5;
         _loc19_.y = _loc21_.y + 36;
         _loc3_ = (_loc1_.width + this.offValue1) / (this.specialMc1["mc"].width / this.specialMc1["mc"].scaleX);
         _loc2_ = (_loc14_.y + _loc14_.height) / (this.specialMc1["mc"].height / this.specialMc1["mc"].scaleY);
         this.specialMc1["mc"].height = _loc19_.y + _loc19_.height - 30;
      }
      
      private function outHandler(param1:MouseEvent) : void
      {
         if(this.specialMc1)
         {
            if(this.specialMc1.parent)
            {
               this.specialMc1.parent.removeChild(this.specialMc1);
            }
         }
         if(this.onLoad)
         {
            return;
         }
         if(this.specialMc)
         {
            if(this.specialMc.parent)
            {
               this.specialMc.parent.removeChild(this.specialMc);
            }
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:Array = null;
         var _loc2_:InteractiveObject = null;
         var _loc3_:InteractiveObject = null;
         if(this._tipObjs != null)
         {
            _loc1_ = this._tipObjs.toArray();
            for each(_loc2_ in _loc1_)
            {
               ToolTipManager.remove(_loc2_);
               this._tipObjs.remove(_loc2_);
            }
            this._tipObjs.clear();
            this._tipObjs = null;
         }
         if(this._specialObjs != null)
         {
            _loc1_ = this._specialObjs.toArray();
            for each(_loc3_ in _loc1_)
            {
               if(_loc3_.hasEventListener(MouseEvent.MOUSE_OVER))
               {
                  _loc3_.removeEventListener(MouseEvent.MOUSE_OVER,this.overHandler);
               }
               if(_loc3_.hasEventListener(MouseEvent.MOUSE_OUT))
               {
                  _loc3_.removeEventListener(MouseEvent.MOUSE_OUT,this.outHandler);
               }
               this._specialObjs.remove(_loc3_);
            }
         }
         this.specialMc = null;
         this.specialMc1 = null;
         this.tips = null;
         this.labels = 0;
         this.dessArr = null;
         this.tagsArr = null;
      }
   }
}
