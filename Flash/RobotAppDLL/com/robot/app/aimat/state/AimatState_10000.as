package com.robot.app.aimat.state
{
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.IActionSprite;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class AimatState_10000 extends BaseAimatState
   {
       
      
      private var _mc:MovieClip;
      
      public function AimatState_10000()
      {
         super();
      }
      
      override public function execute(param1:IActionSprite, param2:AimatInfo) : void
      {
         this._mc = UIManager.getMovieClip("state_10000");
         this._mc.mouseEnabled = false;
         this._mc.mouseChildren = false;
         this._mc.x = Math.random() * 40 - 20;
         this._mc.y = -Math.random() * 40;
         param1.sprite.addChild(this._mc);
      }
      
      override public function destroy() : void
      {
         DisplayUtil.removeForParent(this._mc);
         this._mc = null;
      }
   }
}
