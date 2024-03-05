package com.robot.core.ui
{
   import com.robot.core.config.xml.EmotionXMLInfo;
   import com.robot.core.manager.UIManager;
   import com.robot.core.npc.ParseDialogStr;
   import flash.display.Bitmap;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.component.containers.Box;
   import org.taomee.component.control.MLabel;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.component.layout.FlowWarpLayout;
   import org.taomee.utils.DisplayUtil;
   
   public class DialogBox extends Sprite
   {
       
      
      private var boxMC:MovieClip;
      
      private var bgMC:MovieClip;
      
      private var arrowMC:MovieClip;
      
      private var txt:TextField;
      
      private var timer:Timer;
      
      private var txtBox:Box;
      
      private var instance:com.robot.core.ui.DialogBox;
      
      private var fun:Function;
      
      public function DialogBox(param1:uint = 4000)
      {
         super();
         mouseChildren = false;
         mouseEnabled = false;
         this.boxMC = UIManager.getMovieClip("word_box");
         this.bgMC = this.boxMC["bg_mc"];
         this.arrowMC = this.boxMC["arrow_mc"];
         this.txt = this.boxMC["txt"];
         this.txt.autoSize = TextFieldAutoSize.LEFT;
         this.timer = new Timer(param1,1);
         this.timer.addEventListener(TimerEvent.TIMER,this.closeBox);
         this.instance = this;
         this.txtBox = new Box();
         this.txtBox.isMask = false;
         this.txtBox.width = 160;
         this.txtBox.layout = new FlowWarpLayout(FlowWarpLayout.LEFT,FlowWarpLayout.BOTTOM,-5,-3);
      }
      
      public function show(param1:String, param2:Number = 0, param3:Number = 0, param4:DisplayObjectContainer = null, param5:Function = null) : void
      {
         var _loc6_:MovieClip = null;
         var _loc7_:Bitmap = null;
         if(param5 != null)
         {
            this.fun = param5;
         }
         if(param1.substr(0,1) == "$")
         {
            if(_loc6_ = UIManager.getMovieClip("e" + param1.substring(1,param1.length)))
            {
               _loc6_.scaleX = _loc6_.scaleY = 1.5;
               _loc6_.x = this.bgMC.x + this.bgMC.width / 2;
               _loc6_.y = -38;
               this.boxMC.addChild(_loc6_);
               this.txt.text = "\n\n\n";
            }
            else
            {
               this.txt.text = param1;
            }
         }
         else if(param1.substr(0,1) == "#")
         {
            if(_loc7_ = UIManager.getBitmap("exp_" + param1.substring(1,param1.length)))
            {
               _loc7_.scaleX = _loc7_.scaleY = 1;
               _loc7_.x = this.bgMC.x + _loc7_.width;
               _loc7_.y = -50;
               this.boxMC.addChild(_loc7_);
               this.txt.text = "\n\n\n";
            }
            else
            {
               this.txt.text = param1;
            }
         }
         else
         {
            this.txt.text = param1;
         }
         if(this.txt.textWidth > 70)
         {
            this.bgMC.width = this.txt.textWidth + 14;
            this.bgMC.x = -this.bgMC.width / 2;
         }
         this.bgMC.height = this.txt.textHeight + 8;
         this.bgMC.y = -this.bgMC.height - this.arrowMC.height + 4;
         this.txt.x = this.bgMC.x + 5;
         this.txt.y = this.bgMC.y + 2;
         this.addChild(this.boxMC);
         this.x = param2;
         this.y = param3;
         if(param4)
         {
            param4.addChild(this);
         }
         this.txt.x = this.bgMC.x + (this.bgMC.width - this.txt.textWidth) / 2 - 2;
         this.autoClose();
      }
      
      public function setArrow(param1:String, param2:*) : void
      {
         this.arrowMC[param1] = param2;
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this);
      }
      
      public function destroy() : void
      {
         if(this.txtBox)
         {
            this.txtBox.removeAll();
            this.txtBox.destroy();
            this.txtBox = null;
         }
         DisplayUtil.removeForParent(this);
         this.boxMC = null;
         this.bgMC = null;
         this.arrowMC = null;
         this.txt = null;
         if(this.timer)
         {
            this.timer.stop();
            this.timer.removeEventListener(TimerEvent.TIMER,this.closeBox);
            this.timer = null;
         }
      }
      
      public function getBoxMC() : MovieClip
      {
         return this.boxMC;
      }
      
      public function getTxt() : TextField
      {
         return this.txt;
      }
      
      private function autoClose() : void
      {
         this.timer.start();
      }
      
      private function closeBox(param1:TimerEvent) : void
      {
         if(this.fun != null)
         {
            this.fun();
            this.fun = null;
         }
         this.destroy();
      }
      
      private function showNewEmotion(param1:String, param2:Number = 0, param3:Number = 0, param4:DisplayObjectContainer = null) : void
      {
         var i:String = null;
         var t:uint = 0;
         var j:uint = 0;
         var s:String = null;
         var lable:MLabel = null;
         var c:uint = 0;
         var loadPanel:MLoadPane = null;
         var str:String = param1;
         var x:Number = param2;
         var y:Number = param3;
         var owner:DisplayObjectContainer = param4;
         var parse:ParseDialogStr = new ParseDialogStr(str);
         var count:uint = 0;
         for each(i in parse.strArray)
         {
            j = 0;
            while(j < i.length)
            {
               s = i.charAt(j);
               lable = new MLabel(s);
               lable.fontSize = 12;
               c = uint("0x" + parse.getColor(count));
               if(c == 16777215)
               {
                  c = 0;
               }
               lable.textColor = c;
               lable.cacheAsBitmap = true;
               this.txtBox.append(lable);
               j++;
            }
            count++;
            if(parse.getEmotionNum(count) != -1)
            {
               loadPanel = new MLoadPane(EmotionXMLInfo.getURL("#" + parse.getEmotionNum(count)),MLoadPane.FIT_NONE,MLoadPane.MIDDLE,MLoadPane.MIDDLE);
               loadPanel.setSizeWH(36,32);
               this.txtBox.append(loadPanel);
            }
         }
         t = setTimeout(function():void
         {
            bgMC.width = txtBox.getContainSprite().width + 14;
            bgMC.x = -bgMC.width / 2;
            bgMC.height = txtBox.getContainSprite().height + 8;
            bgMC.y = -bgMC.height - arrowMC.height + 4;
            txtBox.x = bgMC.x + 5;
            txtBox.y = bgMC.y + 2;
            boxMC.addChild(txtBox);
            addChild(boxMC);
            instance.x = x;
            instance.y = y;
            if(owner)
            {
               owner.addChild(instance);
            }
            autoClose();
            clearTimeout(t);
         },300);
      }
      
      public function get boxBgMC() : MovieClip
      {
         return this.bgMC;
      }
      
      public function get boxArrowMC() : MovieClip
      {
         return this.arrowMC;
      }
   }
}
